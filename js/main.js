const openPopUp = document.getElementById('open-popup-tender');
const closePopUp = document.getElementById('close-popup-tender');
const popUp = document.getElementById('popup-tender');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click',() => {
    popUp.classList.remove('active');
})

const openPopUp = document.getElementById('open-popup-offer');
const closePopUp = document.getElementById('close-popup-tender');
const popUp = document.getElementById('popup-offer');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click',() => {
    popUp.classList.remove('active');
})
