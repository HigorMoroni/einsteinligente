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
        //Dica 0 - O Norueguês vive na primeira casa.
        if (this.casas.casa1[1].value == 3) {
            this.dicas[0].setAttribute('checked', 'true')
        } else {
            this.dicas[0].removeAttribute('checked', 'true')
        }
        //Dica 1 - O Inglês vive na casa Vermelha.
        for (let i in this.casas) {
            console.log(this.casas.i)
            if (this.casas.i[1].value == 2 && this.casas.i[0].value == 4) {
                this.dicas[1].setAttribute('checked', 'true')
            } else {
            this.dicas[1].removeAttribute('checked', 'true')
            }
        }
        //Dica 2 - O Sueco tem Cachorros como animais de estimação.
        //Dica 3 - O Dinamarquês bebe Chá.
        //Dica 4 - A casa Verde fica do lado esquerdo da casa Branca.
        //Dica 5 - O homem que vive na casa Verde bebe Café.
        //Dica 6 - O homem que fuma Pall Mall cria Pássaros.
        //Dica 7 - O homem que vive na casa Amarela fuma Dunhill.
        //Dica 8 - O homem que vive na casa do meio bebe Leite.
        //Dica 9 - O homem que fuma Blends vive ao lado do que tem Gatos.
        //Dica 10 - O homem que cria Cavalos vive ao lado do que fuma Dunhill.
        //Dica 11 - O homem que fuma BlueMaster bebe Cerveja.
        //Dica 12 - O Alemão fuma Prince.
        //Dica 13 - O Norueguês vive ao lado da casa Azul.
        //Dica 14 - O homem que fuma Blends é vizinho do que bebe Água.
    }
}
function desistir() {

}
window.addEventListener('change', (e) => {
    console.log(e)
    dom.testarDicas()
})
