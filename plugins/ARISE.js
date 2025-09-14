const axios = require('axios');

module.exports = {
    name: 'autorise',
    description: 'Auto reply when a message *starts with* trigger keywords like "arise", "test", "bot", etc.',

    async execute() {},

    async onMessage(sock, m) {
        if (m.isBot || !m.text) return;

        const text = m.text.trim().toLowerCase();
        const triggers = ['arise', 'test', 'bot', 'rise'];
        const isTriggered = triggers.some(word => text.startsWith(word));

        if (isTriggered) {
            const info = '*BOT ACTIVE AND RUNNING...*';
            const imgUrl = 'https://i.ibb.co/rfsYsGn1/Ayanokouji-1.jpg';
            const author = 'XLIOCN V2';
            const botname = 'XLIOCN V2 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ';
            const sourceUrl = 'https://ahmiikun.live/';

            try {
                const thumbnailBuffer = (await axios.get(imgUrl, { responseType: 'arraybuffer' })).data;

                await m.send(info, {
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        externalAdReply: {
                            title: author,
                            body: botname,
                            thumbnail: thumbnailBuffer,
                            mediaType: 1,
                            renderLargerThumbnail: true,
                            sourceUrl
                        }
                    }
                });
            } catch (err) {
                console.error('❌ Error sending preview message:', err);
                await m.reply('⚠️ Failed to send auto-response.');
            }
        }
    }
};
