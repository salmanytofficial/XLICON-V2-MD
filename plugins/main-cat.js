import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    const res = await fetch('https://cataas.com/cat');
    const img = await res.buffer();

    const forwardMessage = '🌟Here is a random cat for you!';
    const hash = "Powered 𝙗𝙮  𝐱𝐯2 𝐌𝐃";

    const doc = {
      image: { url: img },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "❀•°Cat°•❀",
          body: hash,
          thumbnailUrl: img,
          showAdAttribution: true
        }
      }
    };
    m.react('🐈')
    await conn.sendMessage(m.chat, doc, { quoted: m });

  } catch {
    throw '*Error!*';
  }
};

handler.help = ['cat'];
handler.tags = ['random'];
handler.command = /^cat$/i;
handler.fail = null;

export default handler;
