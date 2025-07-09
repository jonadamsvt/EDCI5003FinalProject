document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("projectForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const title = document.getElementById("projectTitle").value.trim();
    const desc = document.getElementById("projectDesc").value.trim();
    const photoInput = document.getElementById("projectPhoto");
    const file = photoInput.files[0];

    if (!name || !title || !desc || !file) {
      alert("Please fill out all fields and upload a photo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      const project = {
        name,
        title,
        desc,
        photo: reader.result
      };

      const existing = JSON.parse(localStorage.getItem("projects")) || [];
      existing.push(project);
      localStorage.setItem("projects", JSON.stringify(existing));

      alert("Project submitted successfully!");
      form.reset();
    };

    reader.readAsDataURL(file);
  });
});