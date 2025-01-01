let handler = async (m) => {
    global.db.data.sticker = global.db.data.sticker || {};
    let sticker = global.db.data.sticker;

    if (m.mtype === 'stickerMessage' && m.fileSha256) {
        let hash = m.fileSha256.toString('base64');
        if (sticker[hash]) {
            let cmdText = sticker[hash].text;
            let cmd = `${usedPrefix}${cmdText}`;
            m.reply(`Executing command: ${cmd}`);
           
        }
    }
};

export default handler;
