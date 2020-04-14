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
        (function dica0() {
            //Dica 0 - O Norueguês vive na primeira casa.
            if (dom.casas.casa1[1].value == 3) {
                dom.dicas[0].setAttribute('checked', 'true')
            } else {
                dom.dicas[0].removeAttribute('checked', 'true')
            }
        })(),(function dica1() {
            //Dica 1 - O Inglês vive na casa Vermelha.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][1].value == 2 && dom.casas[item][0].value == 4) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[1].setAttribute('checked', 'true')
            } else {
                dom.dicas[1].removeAttribute('checked', 'true')
            }
        })(),(function dica2() {
            //Dica 2 - O Sueco tem Cachorros como animais de estimação.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][1].value == 4 && dom.casas[item][4].value == 0) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[2].setAttribute('checked', 'true')
            } else {
                dom.dicas[2].removeAttribute('checked', 'true')
            }
        })(),(function dica3() {
            //Dica 3 - O Dinamarquês bebe Chá.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][1].value == 1 && dom.casas[item][2].value == 3) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[3].setAttribute('checked', 'true')
            } else {
                dom.dicas[3].removeAttribute('checked', 'true')
            }
        })(),(function dica4() {
            //Dica 4 - A casa Verde fica do lado esquerdo da casa Branca.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][0].value == 3) {
                    if (item != 'casa5') {
                        const itemAnterior = 'casa'+(Number(item[4])+1)
                        if (dom.casas[itemAnterior][0].value == 2) {
                            resDica = true
                        }
                    }
                }
            })
            if (resDica) {
                dom.dicas[4].setAttribute('checked', 'true')
            } else {
                dom.dicas[4].removeAttribute('checked', 'true')
            }
        })()
        
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
window.addEventListener('change', () => {
    dom.testarDicas()
})

// objTeste = {
//     nome: 'Higor',
//     sobrenome: 'Moroni',
//     idade: 26,
//     sexo: 'M',
//     bonito: true,
//     rico: false,
//     saldo: 600.00,
//     familia: {
//         mae: 'Adalgisa',
//         pai: 'Guilherme',
//         esposa: {
//             nome: 'Carla',
//             idade: 28,
//             bonita: true
//         }
//     },
//     comer() {
//         alert('Estou comendo')
//     },
//     dormir() {
//         alert('Estou dormindo')
//     }
// }