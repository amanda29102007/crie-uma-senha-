document.querySelector('.parametro-senha-botao');
const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
senha.textContent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha-botao');
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


console.log(checkbox[0].checked);
const letrasMaiusculas = ‘ABCDEFGHIJKLMNOPQRSTUVXYWZ’;
const letrasMinusculas = ‘abcdefghijklmnopqrstuvxywz’;
const numeros = ‘0123456789’;
const simbolos = ‘!@%*?’;
function geraSenha(){
    let alfabeto = ‘’;
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
    }
    console.log(alfabeto);
    // restante do código omitido
    }
    const checkbox = document.querySelectorAll(‘.checkbox’);
for (i=0; i < checkbox.length;i++){
checkbox[i].onclick = geraSenha;
function geraSenha(){
    let alfabeto = ‘’;
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
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
    console.log(alfabeto);
    // código omitido...
    }
    function geraSenha(){
        let alfabeto = ‘’;
        if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
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
        console.log(alfabeto);
        let senha = ‘’;
        for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
        }
        campoSenha.value = senha;
        }
        