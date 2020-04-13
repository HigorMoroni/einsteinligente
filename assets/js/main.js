let dom = {
    divMain: document.querySelector('div.main'),
    btnDesistir: document.querySelector('.btn-desistir'),
    dicas: document.querySelectorAll('input.dicas'),
    casas: {
        casa1: document.querySelectorAll('select.casa1'),
        casa2: document.querySelectorAll('select.casa2'),
        casa3: document.querySelectorAll('select.casa3'),
        casa4: document.querySelectorAll('select.casa4'),
        casa5: document.querySelectorAll('select.casa5'),
    },
    ativaDiurno() {
        document.body.classList.remove('noturno')
        this.divMain.classList.remove('noturno')
        this.btnDesistir.classList.remove('noturno')
        this.btnDesistir.style.backgroundColor = '#cb2027'
    },
    ativaNoturno() {
        document.body.classList.add('noturno')
        this.divMain.classList.add('noturno')
        this.btnDesistir.classList.add('noturno')
        this.btnDesistir.style.backgroundColor = '#242526'
    },
    testarDicas() {
        alert(this.casas.casa1[1].value)
        //Dica 0
        if (this.casas.casa1[1].value == 3) {
            this.dicas[0].setAttribute('checked', 'true')
        } else {
            this.dicas[0].removeAttribute('checked', 'true')
        }
            //Dica 1
            //Dica 2
            //Dica 3
            //Dica 4
            //Dica 5
            //Dica 6
            //Dica 7
            //Dica 8
            //Dica 9
            //Dica 10
            //Dica 11
            //Dica 12
            //Dica 13
            //Dica 14
    }
}
function desistir() {

}
window.addEventListener('change', (e) => {
    console.log(e)
    dom.testarDicas()
})
