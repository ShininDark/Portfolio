function renderProjectCard(project) {
  return `
    <a class="project-card" href="${PATHS.pages}work-details.html?id=${project.id}">
      <img src="${PATHS.assets}${project.thumbnail}" alt="${project.title}" />
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
      </div>
    </a>
  `;
}

function renderGrid(container, projects) {
  if (!container) return;
  container.innerHTML = projects.map(renderProjectCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("featured-grid");
  const featured = PROJECTS.filter((p) => p.featured);
  renderGrid(grid, featured);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      nav.classList.toggle("open");
    });
  }
});
