import axios from 'axios';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json'
    );
    const cristiano = response.data;
    const ronaldo = cristiano[Math.floor(Math.random() * cristiano.length)];

    const forwardMessage = '*Siiiuuuuuuuuu!*';
    const hash = '*Powered 𝙗𝙮 𝐱𝐯2 𝐌𝐃*';

    const doc = {
      image: { url: ronaldo },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: '❀•°Cristiano Ronaldo°•❀',
          body: hash,
          thumbnailUrl: ronaldo,
          showAdAttribution: true
        }
      }
    };
    
    await conn.sendMessage(m.chat, doc, { quoted: m });

  } catch {
    throw '*Error!*';
  }
};

handler.help = ['cristianoronaldo', 'cr7'];
handler.tags = ['img'];
handler.command = /^(ronaldo|cr7)$/i;

export default handler;
