document.querySelector('.parametro-senha-botao');
const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
senha.textContent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha-botao');
const forcaSenha = document.querySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if(tamanhoSenha > 1){
// tamanhoSenha = tamanhoSenha - 1;
    }
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
    // tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
// codigo omitido 
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll(".checkbox");
console.log(checkbox); 
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
 const valorEntropia = document.querySelector('entropia');
    numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];   
}   
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    campoSenha.value = senha;
    classificaSenha();
    classificaSenha(alfabeto.length);
    }
function classificaSenha(){
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57){
        forcaSenha.classList.add('media');
    } else if (entropia < 35){
        forcaSenha.classList.add('fraca');
    }
}
valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);