// Select DOM elements
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

// Open modal when button is clicked
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
