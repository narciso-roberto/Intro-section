



const dropDown = document.getElementsByClassName("dropdown")

function ativaDropDown(e){
    e.preventDefault()
    const drop = this.querySelector('ul')
    drop.classList.toggle("ativo")
}


Array.from(dropDown).forEach((item) => {
    item.addEventListener('click', ativaDropDown)
})





