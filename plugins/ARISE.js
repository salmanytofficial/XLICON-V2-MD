let handler = async (m, { conn }) => {
  try {
    const img = "https://avatars.githubusercontent.com/u/120536940?v=4";
    const forwardMessage = `*Here is an amazing image for you!*\n\n_Kindly Join our Channel!_\n>_*Don't forget to Click here to stay updated:*_\nhttps://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c`;
    const url = "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c";
    const murl = "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c";
    const hash = global.botname;

    const doc = {
      image: { url: img },
      caption: forwardMessage,
      contextInfo: {
        externalAdReply: {
          title: "↺ |◁   II   ▷|   ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (err) {
    throw '*Error!*';
  }
};

handler.customPrefix = /^(Arise)$/i;
handler.command = new RegExp();

export default handler;
