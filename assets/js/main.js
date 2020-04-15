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
                        const proximoItem = 'casa'+(Number(item[4])+1)
                        if (dom.casas[proximoItem][0].value == 2) {
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
        })(),(function dica5() {
            //Dica 5 - O homem que vive na casa Verde bebe Café.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][0].value == 3 && dom.casas[item][2].value == 1) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[5].setAttribute('checked', 'true')
            } else {
                dom.dicas[5].removeAttribute('checked', 'true')
            }
        })(),(function dica6() {
            //Dica 6 - O homem que fuma Pall Mall cria Pássaros.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][3].value == 3 && dom.casas[item][4].value == 3) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[6].setAttribute('checked', 'true')
            } else {
                dom.dicas[6].removeAttribute('checked', 'true')
            }
        })(),(function dica7() {
            //Dica 7 - O homem que vive na casa Amarela fuma Dunhill.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][0].value == 0 && dom.casas[item][3].value == 2) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[7].setAttribute('checked', 'true')
            } else {
                dom.dicas[7].removeAttribute('checked', 'true')
            }
        })(),(function dica8() {
            //Dica 8 - O homem que vive na casa do meio bebe Leite.
            if (dom.casas.casa3[2].value == 4) {
                dom.dicas[8].setAttribute('checked', 'true')
            } else {
                dom.dicas[8].removeAttribute('checked', 'true')
            }
        })(),(function dica9() {
            //Dica 9 - O homem que fuma Blends vive ao lado do que tem Gatos.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][3].value == 0) {
                    if (item != 'casa5') {
                        const proximoItem = 'casa'+(Number(item[4])+1)
                        if (dom.casas[proximoItem][4].value == 2) {
                            resDica = true
                        }
                    }
                    if (item != 'casa1') {
                        const itemAnterior = 'casa'+(Number(item[4])-1)
                        if (dom.casas[itemAnterior][4].value == 2) {
                            resDica = true
                        }
                    }
                }
            })
            if (resDica) {
                dom.dicas[9].setAttribute('checked', 'true')
            } else {
                dom.dicas[9].removeAttribute('checked', 'true')
            }
        })(),(function dica10() {
            //Dica 10 - O homem que cria Cavalos vive ao lado do que fuma Dunhill.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][4].value == 1) {
                    if (item != 'casa5') {
                        const proximoItem = 'casa'+(Number(item[4])+1)
                        if (dom.casas[proximoItem][3].value == 2) {
                            resDica = true
                        }
                    }
                    if (item != 'casa1') {
                        const itemAnterior = 'casa'+(Number(item[4])-1)
                        if (dom.casas[itemAnterior][3].value == 2) {
                            resDica = true
                        }
                    }
                }
            })
            if (resDica) {
                dom.dicas[10].setAttribute('checked', 'true')
            } else {
                dom.dicas[10].removeAttribute('checked', 'true')
            }
        })(),(function dica11() {
            //Dica 11 - O homem que fuma BlueMaster bebe Cerveja.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][3].value == 1 && dom.casas[item][2].value == 2) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[11].setAttribute('checked', 'true')
            } else {
                dom.dicas[11].removeAttribute('checked', 'true')
            }
        })(),(function dica12() {
            //Dica 12 - O Alemão fuma Prince.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][1].value == 0 && dom.casas[item][3].value == 4) {
                    resDica = true
                }
            })
            if (resDica) {
                dom.dicas[12].setAttribute('checked', 'true')
            } else {
                dom.dicas[12].removeAttribute('checked', 'true')
            }
        })(),(function dica13() {
            //Dica 13 - O Norueguês vive ao lado da casa Azul.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][1].value == 3) {
                    if (item != 'casa5') {
                        const proximoItem = 'casa'+(Number(item[4])+1)
                        if (dom.casas[proximoItem][0].value == 1) {
                            resDica = true
                        }
                    }
                    if (item != 'casa1') {
                        const itemAnterior = 'casa'+(Number(item[4])-1)
                        if (dom.casas[itemAnterior][0].value == 1) {
                            resDica = true
                        }
                    }
                }
            })
            if (resDica) {
                dom.dicas[13].setAttribute('checked', 'true')
            } else {
                dom.dicas[13].removeAttribute('checked', 'true')
            }
        })(),(function dica14() {
            //Dica 14 - O homem que fuma Blends é vizinho do que bebe Água.
            let resDica = false
            Object.keys(dom.casas).forEach((item) => {
                if (dom.casas[item][3].value == 0) {
                    if (item != 'casa5') {
                        const proximoItem = 'casa'+(Number(item[4])+1)
                        if (dom.casas[proximoItem][2].value == 0) {
                            resDica = true
                        }
                    }
                    if (item != 'casa1') {
                        const itemAnterior = 'casa'+(Number(item[4])-1)
                        if (dom.casas[itemAnterior][2].value == 0) {
                            resDica = true
                        }
                    }
                }
            })
            if (resDica) {
                dom.dicas[14].setAttribute('checked', 'true')
            } else {
                dom.dicas[14].removeAttribute('checked', 'true')
            }
        })()
    }
}
function desistir() {

}
window.addEventListener('change', () => {
    dom.testarDicas()
})