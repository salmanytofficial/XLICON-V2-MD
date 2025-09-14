const chatbotUsers = new Set();
const DEFAULT_AI_ENDPOINT = 'https://ab-techiai.abrahamdw882.workers.dev/';

module.exports = {
    name: 'chatbot',
    description: 'Toggle AI Chatbot mode',

    async execute(sock, m, args) {
        if (chatbotUsers.has(m.chat)) {
            chatbotUsers.delete(m.chat);
            await m.reply('🤖 Chatbot *disabled* for this chat.');
            await m.react("❌");
        } else {
            chatbotUsers.add(m.chat);
            await m.reply('🤖 Chatbot *enabled*! I will now respond to messages in this chat.');
            await m.react("✅");
        }
    },

    async onMessage(sock, m) {
        if (m.isBot || !chatbotUsers.has(m.chat) || !m.text) return;

        try {
            const response = await fetch(DEFAULT_AI_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: m.text }]
                })
            });

            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content 
                        || "🤖 Sorry, I couldn't process your request.";

            await m.reply(reply);

        } catch (err) {
            console.error('Chatbot error:', err);
            await m.reply('⚠️ An error occurred while processing your message.');
        }
    }
};
