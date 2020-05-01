const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function(){
        const recipeName = card.getAttribute("id")
        window.location.href = `/recipes/${recipeName}`
    })
}

const contentDetail = document.querySelectorAll('.visibility-content')
const buttonsHideShow = document.querySelectorAll('button')

for(let i = 0; i < buttonsHideShow.length; i++) {
    buttonsHideShow[i].addEventListener("click", function() {
        if (contentDetail[i].classList.contains('hide')) {
            contentDetail[i].classList.remove('hide')
            buttonsHideShow[i].innerHTML = "ESCONDER"
        } else {
            contentDetail[i].classList.add('hide')
            buttonsHideShow[i].innerHTML = "MOSTRAR"
        }
    })
}
