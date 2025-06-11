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

function getCurrentLanguage() {
  return (
    localStorage.getItem("lang") || navigator.language.split("-")[0] || "en"
  );
}

// Función para obtener texto en el idioma correcto
function getText(textObj) {
  const lang = getCurrentLanguage();
  return textObj[lang] || textObj["en"] || Object.values(textObj)[0];
}

const getPosts = async () => {
  const allPosts = await fetchUrl("blog/post/posts.json");
  const sortedPosts = sortPostsByDateDesc(allPosts);

  return getLatestPosts(sortedPosts, 5);
};

async function createPostElement(post) {
  const postDiv = document.createElement("a");
  postDiv.className = "post";
  const postContent = document.createElement("div");
  postContent.className = "post__content";

  const title = document.createElement("h2");
  title.className = "post__title";
  title.textContent = getText(post.title);
  postContent.appendChild(title);

  const date = document.createElement("span");
  date.textContent = new Date(post.date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  postContent.appendChild(date);

  const content = document.createElement("p");
  content.className = "post__desc";
  content.textContent = getText(post.desc);
  postContent.appendChild(content);

  const svgContainer = document.createElement("div");
  svgContainer.className = "post__image";
  const response = await fetch(post.image || "assets/image/default-post.svg");
  const svgText = await response.text();
  svgContainer.innerHTML = svgText;

  postDiv.appendChild(svgContainer);
  postDiv.appendChild(postContent);

  postDiv.href = `blog/post/${post.slug}.html`;
  postDiv.target = "_blank";
  postDiv.rel = "noopener noreferrer";
  return postDiv;
}

window.loadPosts = async () => {
  const posts = await getPosts();

  for (const post of posts) {
    const postElement = await createPostElement(post);
    postsDiv.textContent = "";
    postsDiv.appendChild(postElement);
  }
};

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

const revealEmail = () => {
  const user = "cristianbyte";
  const domain = "gmail";
  const extension = "com";
  const email = user + "@" + domain + "." + extension;

  const link = document.createElement("a");
  link.href = "mailto:" + email;
  link.textContent = email;

  if (confirm("Open email client to contact?")) {
    window.location.href = "mailto:" + email;
  } else {
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard: " + email);
    });
  }
};

document.addEventListener("DOMContentLoaded", loadSavedTheme);
