const buttons = document.querySelectorAll('.botoes');
const modal = document.querySelector('#myModal');
const modalClose = document.querySelector('.close');
const button = document.querySelector('#openModalBtn')
const modalForms = document.getElementById('modalForms');
const openModalFormsButton = document.getElementById('openModalFormsBtn');
const closeModalFormsButton = document.getElementById('closeModalFormsBtn');

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for each "Comprar" button
buttons.forEach(button => {
  button.addEventListener('click', openModal);
});

// Event listener to close the modal when clicking outside of it or on the close button
document.addEventListener('click', event => {
if (!modal.contains(event.target) && event.target !== button && !buttons.includes(event.target)) {
    modal.style.display = 'none';
}
});

openModalFormsButton.addEventListener('click', () => {
  modalForms.style.display = 'block';
});

closeModalFormsButton.addEventListener('click', () => {
  modalForms.style.display = 'none';
});


// Close the modal when clicking on the close button
modalClose.addEventListener('click', closeModal);
