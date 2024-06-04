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
 numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];   
}   
}

















classificaSenha();

function classificaSenha(){ 
    forcaSenha.classList.remove('fraca','media,'forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    }
    }