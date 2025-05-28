const postsDiv = document.getElementById('posts');

const fetchUrl = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

const sortPostsByDateDesc = (posts) => {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const getLatestPosts = (posts, count = 5) => {
  return posts.slice(0, count);
};

const getPosts = async () => {
  const allPosts = await fetchUrl('blog/post/posts.json');
  const sortedPosts = sortPostsByDateDesc(allPosts);
  return getLatestPosts(sortedPosts, 5);
};

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    
    const title = document.createElement('h2');
    title.textContent = post.title;
    postDiv.appendChild(title);
    
    const content = document.createElement('p');
    content.textContent = post.content;
    postDiv.appendChild(content);
    
    const date = document.createElement('span');
    date.className = 'date';
    date.textContent = new Date(post.date).toLocaleDateString();
    postDiv.appendChild(date);
    
    return postDiv;
}

const loadPosts = async () => {
  const posts = await getPosts();
  posts.forEach(post => {
    postsDiv.appendChild(createPostElement(post));
  });
};

loadPosts();
