import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*This command generates images from text prompts*\n\n*Example usage:*\n◉ ${usedPrefix + command} Beautiful anime girl\n◉ ${usedPrefix + command} Elon Musk in pink outfit`;

  try {
    await conn.sendMessage(m.chat, { text: 'Please wait, while I do some magic...' }, { quoted: m });

    const endpoint = `https://api.giftedtech.web.id/api/ai/sd?apikey=gifted&prompt=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (!response.ok) throw '*Image generation failed. Please try again later.*';

    const imageUrl = endpoint;

    await conn.sendFile(m.chat, imageUrl, 'image.png', null, m);
  } catch (error) {
    console.error(error);
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
};

handler.help = ['imagine'];
handler.tags = ['AI'];
handler.command = ['imagine'];
export default handler;
