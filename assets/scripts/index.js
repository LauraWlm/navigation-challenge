/* Sélection des éléments HTML */

let link = document.getElementById('link')
let burger = document.getElementById('burger')
let menu = document.getElementById('menu')

link.addEventListener('click', function(e) {
    e.preventDefault()
    burger.classList.toggle('open')
    menu.classList.toggle('open')
})