document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const messageInput = document.getElementById('message-input');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    // Respuestas predefinidas del bot
    const botResponses = {
        'hola': '¡Hola! ¿Cómo puedo ayudarte?',
        'productos': 'Tenemos una amplia gama de productos de belleza. ¿Qué estás buscando específicamente?',
        'precio': 'Los precios varían según el producto. ¿Hay alguno en particular que te interese?',
        'default': 'Gracias por tu mensaje. ¿Podrías ser más específico para poder ayudarte mejor?'
    };

    // Toggle chat window
    chatbotToggle.addEventListener('click', function() {
        chatWindow.classList.toggle('show');
    });

    // Close chat
    closeChat.addEventListener('click', function() {
        chatWindow.classList.remove('show');
    });

    // Send message function
    function sendUserMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user-message');
            
            // Get bot response
            setTimeout(() => {
                const response = getBotResponse(message.toLowerCase());
                addMessage(response, 'bot-message');
            }, 500);

            // Clear input
            messageInput.value = '';
        }
    }

    // Send message on button click
    sendMessage.addEventListener('click', sendUserMessage);

    // Send message on Enter key
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    // Add message to chat
    function addMessage(message, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${className}`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Get bot response
    function getBotResponse(message) {
        for (const [key, response] of Object.entries(botResponses)) {
            if (message.includes(key)) {
                return response;
            }
        }
        return botResponses.default;
    }
});