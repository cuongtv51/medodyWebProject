//Dom
const modalBtns = document.querySelectorAll('.js-modalOpen');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalInner = document.querySelector('.js-modal-inner')
function hideModal(){
    modal.classList.remove('open');
}
function showmodal(){
    modal.classList.add('open')
}
for(const modalBtn of modalBtns) {
    modalBtn.addEventListener('click', showmodal )
}
modalClose.addEventListener('click', hideModal )
modal.addEventListener('click', hideModal)
modalInner.addEventListener('click', function(event){
    event.stopPropagation()
})