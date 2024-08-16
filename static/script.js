document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const newChatButton = document.getElementById('new-chat');
    const conversationList = document.getElementById('conversation-list');

    let currentConversation = [];

    function addMessage(content, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', isUser ? 'user-message' : 'ai-message');
        messageElement.textContent = content;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        currentConversation.push({ role: isUser ? 'user' : 'assistant', content });
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';

            fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            })
            .then(response => response.json())
            .then(data => {
                addMessage(data.message);
            });
        }
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    newChatButton.addEventListener('click', () => {
        currentConversation = [];
        chatMessages.innerHTML = '';
        addConversationToList();
    });

    function addConversationToList() {
        const listItem = document.createElement('li');
        listItem.textContent = `Conversation ${conversationList.children.length + 1}`;
        conversationList.appendChild(listItem);
    }

    addConversationToList();
});