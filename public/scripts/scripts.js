const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener('click', function(){
        
        const linkId = card.getAttribute('id')

        // ir para a página da receita
        window.location.href = `/dish?id=${linkId}`
        
    })
}

