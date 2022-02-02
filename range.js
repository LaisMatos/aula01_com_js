'use strict' //limita os erros de programação

    //função para iniciar range
    const iniciarRange=(idRange)=>{

        //declarão de variaveis e (????)
        const range= document.getElementById(idRange)
        const span= document.getElementById(`valor-${idRange}`)

        //função AtualizarValor
        const atualizarValor= () => span.textContent = range.valuerange.addEventListener('input',atualizarValor)
     
    }

    export{
        iniciarRange
    }

    //arquivo  import. Parecido com uma class