// Ensure the DOM is fully loaded before executing any scripts.
document.addEventListener('DOMContentLoaded', function() {
  
  // --- Changing Text Content Dynamically ---
  const changeTextBtn = document.getElementById('change-text-btn');
  const contentParagraph = document.getElementById('content-paragraph');

  changeTextBtn.addEventListener('click', function() {
    contentParagraph.textContent = 'The text has been changed dynamically!';
  });

  // --- Modifying CSS Styles via JavaScript ---
  const changeStyleBtn = document.getElementById('change-style-btn');
  const styleBox = document.getElementById('style-box');
  let isOriginalStyle = true;

  changeStyleBtn.addEventListener('click', function() {
    if (isOriginalStyle) {
      styleBox.style.backgroundColor = 'salmon';
      styleBox.style.width = '150px';
      styleBox.style.height = '150px';
      styleBox.style.lineHeight = '150px';
    } else {
      styleBox.style.backgroundColor = 'lightblue';
      styleBox.style.width = '100px';
      styleBox.style.height = '100px';
      styleBox.style.lineHeight = '100px';
    }
    isOriginalStyle = !isOriginalStyle;
  });

  // --- Adding or Removing an Element ---
  const toggleElementBtn = document.getElementById('toggle-element-btn');
  const elementContainer = document.getElementById('element-container');

  toggleElementBtn.addEventListener('click', function() {
    // Check if the toggled element already exists.
    const toggledElement = document.getElementById('toggle-element');
    
    if (toggledElement) {
      // Remove the element if it exists.
      elementContainer.removeChild(toggledElement);
    } else {
      // Create a new <p> element and add it.
      const newElement = document.createElement('p');
      newElement.id = 'toggle-element';
      newElement.textContent = 'A new element has been added!';
      elementContainer.appendChild(newElement);
    }
  });

});
