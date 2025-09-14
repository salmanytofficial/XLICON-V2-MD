const axios = require('axios');

module.exports = {
    name: 'ping',
    aliases: ['speed', 'latency'],
    description: 'Check bot response speed',

    async execute(sock, m, args) {
        const start = Date.now();
        await m.reply('Pinging...');
        const latency = Date.now() - start;
        const info = `> Latency: ${latency} ms`;
        const imgUrl = 'https://i.ibb.co/rfsYsGn1/Ayanokouji-1.jpg';
        const author = 'XLIOCN V2';
        const botname = 'XLIOCN V2 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ';
        const sourceUrl = 'https://ahmmikun.live/';

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
            console.error('Error sending ping info:', err);
        }
    }
};
