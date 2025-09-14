const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');

module.exports = {
    name: 'sticker',
    description: 'Convert an image or video to sticker',
    aliases: ['s', 'stkr'],
    tags: ['main'],
    command: /^sticker$/i,

    async execute(sock, m, args) {
        try {
            const target = m.quoted || m;

            let mediaBuffer;
            if (typeof target.download === 'function') {
                mediaBuffer = await target.download();
            } else if (target.message) {
                mediaBuffer = await downloadMediaMessage(
                    { message: target.message },
                    'buffer',
                    {},
                    sock
                );
            }

            if (!mediaBuffer) {
                return await sock.sendMessage(
                    m.from,
                    { text: 'Send or reply to an image/video to create a sticker.' },
                    { quoted: m }
                );
            }
            const sticker = new Sticker(mediaBuffer, {
                pack: 'XLIOCN V2',
                author: 'XLIOCN V2 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
                type: StickerTypes.DEFAULT,
                quality: 80,
            });

            const stickerBuffer = await sticker.toBuffer();
            await sock.sendMessage(
                m.from,
                { sticker: stickerBuffer },
                { quoted: target.key ? target : undefined }
            );

            console.log(`✅ Sticker sent in chat ${m.from}`);
        } catch (err) {
            console.error('❌ Sticker command error:', err);
            await sock.sendMessage(
                m.from,
                { text: 'Failed to create sticker. See console for details.' },
                { quoted: m }
            );
        }
    }
};
