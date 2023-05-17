const button = document.querySelector('#openModalBtn')
const modal = document.querySelector('#myModal')
const modalClose = document.querySelector('.close')



// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}



button.addEventListener('click', event => {
    modal.style.display = "block";
});

document.addEventListener('click', event => {
    if (!modal.contains(event.target) && event.target !== button) {
      modal.style.display = 'none';
    }
  });

/*modalClose.addEventListener('click', () => {
    modal.style.display = "none";
})*/
