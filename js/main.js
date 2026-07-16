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

window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (!pre) return;
  setTimeout(() => {
    pre.classList.add("hidden");
    document.body.classList.add("loaded");
  }, 300);
});

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  if (!skillsSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsSection.querySelectorAll(".skill-fill").forEach((bar) => {
            bar.style.width = bar.dataset.pct + "%";
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(skillsSection);
});
