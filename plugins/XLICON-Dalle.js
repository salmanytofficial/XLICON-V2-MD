import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Example:* *${usedPrefix + command} a cat flying in the sky*`;

  const prohibited = ['fuck', 'porn', 'pussy', 'hentai', 'pornhub', 'xnxx', 'xvideos', 'vagina', 'horny', 'ass', 'nude', 'nsfw', 'sex', 'blowjob', 'anal', '+18', 'hot', 'xxx'];
  if (prohibited.some(word => text.toLowerCase().includes(word))) {
    return m.reply('*⚠️ BOT WON\'T SEND THIS AS IT CONTAINS +18 CONTENT*');
  }

  try {
    const apiUrl = `https://bk9.fun/ai/Text2Img?q=${encodeURIComponent(text)}`;
    const res = await fetch(apiUrl);

    if (!res.ok) throw new Error('Failed to fetch generated image');
    const imageUrl = await res.text();

    if (!imageUrl) throw new Error('No image URL returned');
    await conn.sendFile(m.chat, imageUrl, 'generated.jpg', `*🖼️ Generated Image for:* ${text}`, m);
  } catch (error) {
    console.error(error);
    m.reply('⚠️ Sorry, there was an error generating the image. Please try again later.');
  }
};

handler.help = ['dalle <prompt>', 'imagegen <prompt>'];
handler.tags = ['ai', 'image', 'generator'];
handler.command = /^(dalle|imagegen)$/i;

export default handler;
