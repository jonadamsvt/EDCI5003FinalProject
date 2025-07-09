document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("projectGallery");
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  if (projects.length === 0) {
    gallery.innerHTML = "<p>No projects submitted yet. Be the first to showcase your work!</p>";
    return;
  }

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${proj.photo}" alt="Project Image" />
      <h3>${proj.title}</h3>
      <p><strong>By:</strong> ${proj.name}</p>
      <p>${proj.desc}</p>
    `;
    gallery.appendChild(card);
  });
});