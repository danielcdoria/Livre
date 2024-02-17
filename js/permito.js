function enviarFormulario() {
    // Realize aqui qualquer validação adicional que você precise antes de redirecionar

    // Obtenha os valores dos campos (opcional)
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;

    // Exemplo de validação simples (todos os campos preenchidos)
    if (nome && email && numero) {
        // Redirecione para o link desejado
        window.location.href = "https://chat.whatsapp.com/GmFZydTsKIC9y330jh490R";
    } else {
        // Caso contrário, exiba uma mensagem de erro ou realize outra ação
        alert("Por favor, preencha todos os campos.");
    }
}