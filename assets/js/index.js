const postsDiv = document.getElementById("posts");

const fetchUrl = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error.message);
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
  const allPosts = await fetchUrl("blog/post/posts.json");
  const sortedPosts = sortPostsByDateDesc(allPosts);
  return getLatestPosts(sortedPosts, 5);
};

function createPostElement(post) {

  const postDiv = document.createElement("a");
  postDiv.className = "post";

  const title = document.createElement("h2");
  title.textContent = post.title;
  postDiv.appendChild(title);

  const content = document.createElement("p");
  content.textContent = post.content;
  postDiv.appendChild(content);

  const date = document.createElement("span");
  date.className = "date";
  date.textContent = new Date(post.date).toLocaleDateString();
  postDiv.appendChild(date);

  const image = document.createElement("img");
  image.src = post.image || "assets/img/default-post.jpg"; // Default image if none provided
  image.alt = post.title;
  postDiv.appendChild(image);

  postDiv.href = `blog/post/${post.slug}.html`;
  postDiv.target = "_blank";
  postDiv.rel = "noopener noreferrer";
  postDiv.addEventListener("click", (e) => {
    e.preventDefault();
    window.playSound("select");
    window.location.href = postDiv.href; // Navigate to the post
  });



  return postDiv;
}

const loadPosts = async () => {
  const posts = await getPosts();
  posts.forEach((post) => {
    postsDiv.appendChild(createPostElement(post));
  });
};

loadPosts();

/* -- Footer -- */
const setTheme = (theme, btn) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preferred-theme", theme);

  // Actualizar botones activos
  document.querySelectorAll(".theme-btn").forEach((b) => {
    b.classList.remove("active");
  });

  btn.classList.add("active");
};

// Cargar tema guardado
const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem("preferred-theme") || "tech";
  document.documentElement.setAttribute("data-theme", savedTheme);

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.trim().toLowerCase() === savedTheme.toLowerCase()) {
      btn.classList.add("active");
    }
  });
};

// Función para revelar email (protección anti-bots)
const revealEmail = () => {
  const user = "cristianbyte";
  const domain = "gmail";
  const extension = "com";
  const email = user + "@" + domain + "." + extension;

  // Crear enlace temporal
  const link = document.createElement("a");
  link.href = "mailto:" + email;
  link.textContent = email;

  // Mostrar en un modal simple o alert
  if (confirm("Open email client to contact?")) {
    window.location.href = "mailto:" + email;
  } else {
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard: " + email);
    });
  }
};

// Inicializar tema al cargar la página
document.addEventListener("DOMContentLoaded", loadSavedTheme);
