const sunContainer = document.querySelector(".sun-container");
const sun = document.getElementById("sun");

// Ellipse dimensions
const a = sunContainer.getBoundingClientRect().width / 2;
const b = sunContainer.getBoundingClientRect().height / 2;

function updateSunPosition() {
  // Calculate scroll progress (0 to 1)
  const scrollProgress =
    window.scrollX / (document.body.scrollWidth - window.innerWidth);

  // Start at π/2 (top of ellipse) and go counterclockwise
  const angle = scrollProgress * 2 * Math.PI - Math.PI / 2;

  // Parametric equations for ellipse
  const x = a * Math.cos(angle);
  const y = b * Math.sin(angle);

  // Position the sun
  sun.style.left = `${x + a}px`;
  sun.style.top = `${y + b}px`;
}

// Add scroll event listener
window.addEventListener("scroll", updateSunPosition);

// Initial position
updateSunPosition();
