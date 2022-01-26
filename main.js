'use strict' //limita os erros de programação

    // func validação de dados
function camposValidos (nome,altura,peso){
    return document.getElementById('formulario').reportValidity();
}

    // func calcular
function calcularIMC(altura,peso){
    return peso/(altura*altura);
}
    //func classificação
function classificarIMC(imc){
    
    let mensagem;
    if (imc < 18.5){
        mensagem =" Você está abaixo do peso ideal";
        }else if(imc<25){
            mensagem= "Você está com peso ideal";
        }else if(imc<30){
            mensagem= "Você está engordando";
        }else if(imc<35){
            mensagem= "Você está gordo";
        }else if(imc<40){
            mensagem= "Você está gordão";
        }else{
            mensagem= "Você está com obesidade morbida";
    }
    return mensagem;
}
    // func exibir resultado
function mostrarResultado(){
   
    //variaveis locais
    const nome =  document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (camposValidos()){
        
        const imc= calcularIMC(altura,peso);
        let mensagem= classificarIMC(imc);
        
        resultado.textContent= `${nome} , seu IMC é: ${imc.toFixed(2)} ${mensagem}`;
    }else {
        resultado.textContent=`Preencha todos os campos`;
        }
}

document.getElementById('calcular').addEventListener('click',mostrarResultado);