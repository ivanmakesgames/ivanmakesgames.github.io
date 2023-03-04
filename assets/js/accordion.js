// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Loop through each accordion header
accordionHeaders.forEach(header => {
  // Add click event listener to each header
  header.addEventListener('click', () => {
    // Toggle the active class on the clicked header
    header.classList.toggle('active');

    // Get the next element after the header (i.e. the accordion content)
    const accordionContent = header.nextElementSibling;

    // Toggle the display of the accordion content
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});