import fetch from 'node-fetch';

let handler = async (m) => {
    let message = m.quoted ? m.quoted : m;
    let text = (message.text || '').trim();
    if (!text) {
        throw "✳️ Please provide text for the AI to process.";
    }

    let [query, count] = text.split(',').map(str => str.trim());
    if (!query) throw "✳️ Please provide a valid query for the image search.";
    count = parseInt(count) || 1;

    await m.react('⏳');
    try {
        let response = await fetch(`https://ironman.koyeb.app/ironman/wallpaper/wpcom?name=${encodeURIComponent(query)}`);
        let res = await response.json();

        if (!res || !res.image || !Array.isArray(res.image)) {
            throw "❌ Failed to fetch images. Please try again.";
        }

        let images = res.image;
        let sentImages = [];

        for (let i = 0; i < count; i++) {
            let randomIndex = Math.floor(Math.random() * images.length);
            let randomImage = images[randomIndex];

            if (sentImages.includes(randomImage)) {
                i--;
                continue;
            }

            sentImages.push(randomImage);

            await conn.sendMessage(m.chat, {
                image: { url: randomImage }
            }, { quoted: m });
        }
        await m.react('✅');
    } catch (error) {
        await m.react('❌');
        throw error;
    }
};

handler.help = ['img <query>, <count>'];
handler.tags = ['ai'];
handler.command = /^(img)$/i;

export default handler;
