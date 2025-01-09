import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json');
    const messiImages = response.data;
    const messiImageUrl = messiImages[Math.floor(Math.random() * messiImages.length)];

    const forwardMessage = '*Messi - The Legend!*';
    const hash = '*Powered 𝙗𝙮 𝐱𝐯2 𝐌𝐃*';

    const doc = {
      image: { url: messiImageUrl },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "❀•°Messi°•❀",
          body: hash,
          thumbnailUrl: messiImageUrl,
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });

  } catch {
    throw '*Error!*';
  }
};

handler.help = ['messi'];
handler.tags = ['img'];
handler.command = /^(messi)$/i;

export default handler;
