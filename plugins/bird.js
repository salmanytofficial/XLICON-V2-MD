import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const response = await fetch('https://some-random-api.com/animal/bird');
    const data = await response.json();

    const birdFact = data.fact;
    const birdImageUrl = data.image;

    const forwardMessage = `🌟 Here's a random bird fact for you: \n\n"${birdFact}"`;
    const hash = '*Powered 𝙗𝙮 𝐱𝐯2 𝐌𝐃*';

    const doc = {
      image: { url: birdImageUrl },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "❀•°Bird°•❀",
          body: hash,
          thumbnailUrl: birdImageUrl,
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });

  } catch {
    throw '*Error!*';
  }
};

handler.help = ['bird'];
handler.tags = ['random'];
handler.command = /^bird$/i;

export default handler;
