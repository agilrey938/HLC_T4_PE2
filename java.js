const mensaje = document.getElementById('mensaje');
const messages = document.getElementById('messages');

function showTabById(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.id === tabId);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.id.replace('btn', 'tab');
        showTabById(tabId);
      });
    });
  });

  function agregarNota() {
    const mensaje = document.getElementById('mensaje');
    const div = document.createElement('div');
    div.textContent = mensaje.value;
    div.classList.add('nota');
    document.getElementById('notas').insertBefore(div, document.getElementById('notas').firstChild);
    mensaje.value = '';
  }
  document.getElementById('mensaje').addEventListener('keydown', function comprobarEnter(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
    agregarNota();
    }
});

function getRandomBotMessage () {
  const messages = [
      "Creo que no.",
      "¡Totalmente!",
      "Eso suena interesante.",
      "No estoy seguro de entender, ¿puedes explicar más?",
      "¡Qué genial!",
      "Hmm, déjame pensar...",
      "¡Por supuesto!",
      "No sé, pero suena divertido.",
      "¿Puedes decirme más?",
      "Eso es un misterio para mí.",
      "¡Me encanta hablar contigo!"]

  return messages[Math.floor(Math.random() * messages.length)];
}