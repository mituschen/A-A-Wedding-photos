//
// WeddingGram JavaScript
//
// Provides light interactivity for the photo gallery. When a user clicks on a
// photo, a modal dialog appears to display a larger version of the image along
// with its caption. Clicking outside the image or on the close button
// dismisses the modal.

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.querySelector('.close');

  // Attach click handlers to every photo in the gallery
  document.querySelectorAll('.photo-card img').forEach((img) => {
    img.addEventListener('click', () => {
      // Show the modal
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      // Populate modal content
      modalImg.src = img.src;
      const captionEl = img.parentElement.querySelector('.caption');
      modalCaption.textContent = captionEl ? captionEl.textContent : '';
    });
  });

  // Close the modal when the user clicks on the X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  // Also close modal if the background overlay is clicked
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});