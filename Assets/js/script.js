// ===== Burgers Menu =====
let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navbar.classList.toggle("open");
};

// ===== SCROLL TOP SYSTEM =====
// Debounce function to limit how often scrollFunction is called
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
    setTimeout(() => {
      scrollTopBtn.style.opacity = "1.00";
    }, 10); // Small delay to ensure the display change is applied first
  } else {
    scrollTopBtn.style.opacity = "0.00";
    setTimeout(() => {
      scrollTopBtn.style.display = "none";
    }, 300); // Matches the duration of the opacity transition
  }
}

// Apply debounce with a 50ms delay
window.onscroll = debounce(scrollFunction, 50);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change button icon class to solid on mouse over
function solidScrollTop(event) {
  const closeButton = event.target;
  closeButton.classList.remove("fa-regular");
  closeButton.classList.add("fa-solid");
}

// Change button icon class to regular on mouse out
function regularScrollTop(event) {
  const closeButton = event.target;
  closeButton.classList.remove("fa-solid");
  closeButton.classList.add("fa-regular");
}
