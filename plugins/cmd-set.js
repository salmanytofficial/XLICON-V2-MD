let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {};
    global.db.data.message = global.db.data.message || {};

    if (!m.quoted) throw `✳️ Reply to a message with *${usedPrefix + command}*`;
    if (!text) throw `✳️ Command is missing`;

    let sticker = global.db.data.sticker;
    let message = global.db.data.message;

    if (m.quoted.fileSha256) {
        let hash = m.quoted.fileSha256.toString('base64');
        if (sticker[hash] && sticker[hash].locked) throw '⚠️ You do not have permission to change this Sticker command';
        sticker[hash] = {
            text,
            mentionedJid: m.mentionedJid,
            creator: m.sender,
            at: +new Date(),
            locked: false,
        };
        m.reply(`✅ Sticker command saved`);
    } else {
        let messageId = m.quoted.id;
        if (message[messageId] && message[messageId].locked) throw '⚠️ You do not have permission to change this Message command';
        message[messageId] = {
            text,
            mentionedJid: m.mentionedJid,
            creator: m.sender,
            at: +new Date(),
            locked: false,
        };
        m.reply(`✅ Message command saved`);
    }
};

handler.help = ['cmd'].map(v => 'set' + v + ' <txt>');
handler.tags = ['cmd'];
handler.command = ['setcmd'];
handler.owner = true;

export default handler;
