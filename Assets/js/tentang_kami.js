// ===== Tentang Kami =====
function modals1() {
  document.getElementById("modals-1").classList.remove("hidden");
  document.getElementById("modals-1").classList.add("flex");
  document.getElementById("modals-2").classList.add("hidden");
  document.getElementById("modals-3").classList.add("hidden");
}

function modals2() {
  document.getElementById("modals-1").classList.add("hidden");
  document.getElementById("modals-2").classList.remove("hidden");
  document.getElementById("modals-3").classList.add("hidden");
}

function modals3() {
  document.getElementById("modals-1").classList.add("hidden");
  document.getElementById("modals-2").classList.add("hidden");
  document.getElementById("modals-3").classList.remove("hidden");
}

function closeModals() {
  // Find all modals
  const modals = document.querySelectorAll(".modals-container");

  // Iterate through each modal
  modals.forEach(function (modal) {
    // Check if the modal does not have the 'hidden' class
    if (!modal.classList.contains("hidden")) {
      // Add the 'hidden' class to hide the modal
      modal.classList.add("hidden");
    }
  });
}

function solidClose(event) {
  const closeButton = event.target;
  closeButton.classList.remove("fa-regular");
  closeButton.classList.add("fa-solid");
}

function regularClose(event) {
  const closeButton = event.target;

  closeButton.classList.remove("fa-solid");
  closeButton.classList.add("fa-regular");
}

function scrollDown() {
  const scrollContainer = document.getElementById("scroll-container");
  const container_about_us = document.getElementById("container-about-us");
  const scrollIndicator = document.getElementById("scroll_indicator");
  const scrollArrow = document.getElementById("scrollArrow");

  // Update margin-top based on checkbox state
  if (scrollIndicator.checked) {
    scrollContainer.style.top = "-55vh";
    scrollArrow.classList.add("scrollArrowUp");
  } else {
    scrollContainer.style.top = "2.4vw";
    scrollArrow.classList.remove("scrollArrowUp");
    container_about_us.style.marginBottom = "0";
  }
}

// Add event listener for checkbox
document
  .getElementById("scroll_indicator")
  .addEventListener("change", scrollDown);
