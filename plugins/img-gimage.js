import fetch from 'node-fetch';

let handler = async (m) => {
    let message = m.quoted ? m.quoted : m;
    let text = (message.text || '').trim();
    if (!text) {
        throw "✳️ Please provide text for the AI to process.";
    }
    await m.react('⏳');
    try {
        let response = await fetch(`https://ironman.koyeb.app/ironman/wallpaper/wpcom?name=${encodeURIComponent(text)}`);
        let res = await response.json();
        await m.react('✅');
        
        if (res && res.length > 0 && res[0].image) {
            await conn.sendMessage(m.chat, {
                image: { url: res[0].image },
                caption: res[0].title
            }, { quoted: m });
        } else {
            throw "❌ No image found for the given text.";
        }
    } catch (error) {
        console.log(error);
        await m.reply(error.toString());
        throw error;
    }
};

handler.help = ['img'];
handler.tags = ['ai'];
handler.command = /^(img)$/i;

export default handler;
