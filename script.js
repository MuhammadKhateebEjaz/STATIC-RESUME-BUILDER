// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
  
    // Add event listener to each header
    collapsibleHeaders.forEach(header => {
      header.addEventListener("click", function () {
        const content = this.nextElementSibling; // The content div
  
        // Toggle the display of the content
        if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
  
    // Contact form toggle functionality (same as before)
    const contactBtn = document.getElementById("contact-btn");
    const contactForm = document.getElementById("contact-form");
  
    contactBtn.addEventListener("click", function () {
      if (contactForm.classList.contains("hidden")) {
        contactForm.classList.remove("hidden");
      } else {
        contactForm.classList.add("hidden");
      }
    });
  });
  