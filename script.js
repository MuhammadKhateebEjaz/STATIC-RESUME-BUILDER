"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Get all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    // Add event listener to each header
    collapsibleHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            // The content div (next sibling of the header)
            const content = header.nextElementSibling;
            // Check if the content exists and toggle its visibility
            if (content) {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none"; // Fixed the incomplete statement here
                }
            }
        });
    });
});


