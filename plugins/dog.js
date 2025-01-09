import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/images/search');
    const data = await response.json();
    const dogImageUrl = data[0].url;

    const forwardMessage = '🌟Here is a random dog for you!';
    const img = dogImageUrl;
    const hash = "Powered 𝙗𝙮  𝐱𝐯2 𝐌𝐃";

    const doc = {
      image: { url: dogImageUrl },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "❀•°Dog°•❀",
          body: hash,
          thumbnailUrl: img,
          showAdAttribution: true
        }
      }
    };
    m.react('🦮')
    await conn.sendMessage(m.chat, doc, { quoted: m });

  } catch {
    throw '*Error!*';
  }
};

handler.help = ['dog'];
handler.tags = ['random'];
handler.command = /^dog$/i;
handler.fail = null;

export default handler;
