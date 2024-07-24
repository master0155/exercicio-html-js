function validarFormulario(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var mensagem = document.getElementById('mensagem');

    if (numero2 > numero1){
        mensagem.textContent = 'Formulário válido! Número 2 é maior que Número 1.';
        mensagem.className = 'mensagem-positiva'
    } else {
    mensagem.textContent = 'Formulário inválido! Número 2 deve ser maior que Número 1.';
    mensagem.className = 'mensagem-negativa';
    }
}