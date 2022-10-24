let item = document.querySelectorAll('.list-item')
let active = document.querySelectorAll('.question')

// Por que não usar logo o active ao invés do item? 
// Porque o tamanho que o active ocupa na tela é muito pequeno, e no item o usuário pode clicar também nas respostas que irá fechá-la.

item.forEach((question, index) => {
    question.addEventListener('click', () =>{
        active[index].classList.toggle('active')
        active.forEach((divAtual) => {
            if(divAtual !== active[index]) {
                divAtual.classList.remove('active')
            }
        })
    })
})