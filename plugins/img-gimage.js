import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
    let message = m.quoted ? m.quoted : m;
    let text = (message.text || '').trim();
    if (!text) {
        throw "✳️ Please provide text for the AI to process.";
    }
    await m.react('⏳');
    try {
        let response = await fetch(`https://bk9.fun/pinterest/search?q=${encodeURIComponent(text)}`);
        let res = await response.json();
        await m.react('✅');
        
        if (res && res.status && res.BK9.length > 0) {
            let randomResult = res.BK9[Math.floor(Math.random() * res.BK9.length)];
            await conn.sendMessage(m.chat, {
                image: { url: randomResult.images_url },
                caption: randomResult.grid_title || "No title provided."
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
