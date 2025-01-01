let handler = async (m, { conn }) => {
  try {
    const img = "https://avatars.githubusercontent.com/u/120536940?v=4";
    const forwardMessage = `*Cause the weak have no rights 🎇*\n\n_Kindly Join our Channel!_\n> Don't forget to Click the link below to stay updated:\nhttps://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c`;
    const url = "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c";
    const murl = "https://instagram.com/abraham.dwamena.182";
    const hash = global.botname;
    const audioUrl = "https://cdn.ironman.my.id/q/DDEFR.mp4";

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
    await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
  } catch (err) {
    throw '*Error!*';
  }
};

handler.customPrefix = /^(Arise)$/i;
handler.command = new RegExp();

export default handler;
