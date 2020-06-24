const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal-background')
const exitButton = document.querySelector('.close-button')
const modalImage = document.querySelector('.modalImage')
const modalText = document.querySelector('.modal-text')

for (let card of cards) {
    card.addEventListener('click', function(){
        modal.classList.add('active')
        
        const imageId = card.getAttribute('id')

        modalImage.src = `${imageId}`


        const cardTexth1 = card.querySelector('.image-description')
        const cardTextp = card.querySelector('.references')

        modalText.innerHTML += `<h2>${cardTexth1.textContent}</h2>`
        modalText.innerHTML += `<p>${cardTextp.textContent}</p>`
    })
}


exitButton.addEventListener('click', function(){
    modal.classList.remove('active')
    modalText.innerHTML = ''
})

