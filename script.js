// Adicionar evento de clique no botão de enviar
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
   });