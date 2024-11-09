// script.ts

document.addEventListener("DOMContentLoaded", function () {
    // Get all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header') as NodeListOf<HTMLElement>;
  
    // Add event listener to each header
    collapsibleHeaders.forEach((header: HTMLElement) => {
      header.addEventListener("click", function () {
        // The content div (next sibling of the header)
        const content = header.nextElementSibling as HTMLElement | null;
  
        // Check if the content exists and toggle its visibility
        if (content) {
          if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
          } else {
            con
  