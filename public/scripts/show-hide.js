/* botão mostrar e esconder */

const ingredientButton = document.querySelector('.ingredientButton')
const prepareButton = document.querySelector('.prepareButton')
const informationButton= document.querySelector('.informationButton')

const ingredientList = document.querySelector('.ingredientList')
const prepareList = document.querySelector('.prepareList')
const informationList = document.querySelector('.informationList')

function showHide(button, list) {
    
    if (button.classList.contains('showed')) {
        list.style.display = 'none'
        button.innerHTML = 'mostrar'
        button.classList.remove('showed')
        
    } else {
        list.style.display = 'block'
        button.innerHTML = 'esconder'
        button.classList.add('showed')
    }
}

ingredientButton.addEventListener('click', function(){
    showHide(ingredientButton, ingredientList)
})

prepareButton.addEventListener('click', function(){
    showHide(prepareButton, prepareList)
})

informationButton.addEventListener('click', function(){
    showHide(informationButton, informationList)
})


