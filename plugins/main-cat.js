import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://cataas.com/cat');
    let img = await res.buffer();
    let caption = `*here is a random cat🐈*`.trim();
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m);

    const str = "Here's an exciting message!";
    await conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
        externalAdReply: {
          title: "Adventure Awaits!",
          body: "Check out the latest updates.",
          thumbnailUrl: "https://telegra.ph/file/b1b157e944010efebf1d7.jpg",
          sourceUrl: "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c",
        }
      }
    }, { quoted: m });

    m.react('✅');

    if (m.quoted && m.quoted.isForwarded) {
      const forwardInfo = m.quoted.forwardingScore > 0 ? `Forwarded ${m.quoted.forwardingScore} times` : "Recently Forwarded";
      const forwardMessage = `This message was ${forwardInfo}.\nContent: ${m.quoted.text || "(No Text Content)"}`;

      await conn.sendMessage(m.chat, {
        text: forwardMessage,
        contextInfo: {
          externalAdReply: {
            title: "Forwarded Message Info",
            body: "Learn more about this message.",
            thumbnailUrl: "https://telegra.ph/file/b1b157e944010efebf1d7.jpg",
            sourceUrl: "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c",
          }
        }
      }, { quoted: m });
    }
  } catch (e) {
    console.log(e);
    throw '*Error!*';
  }
};

handler.help = ['cat'];
handler.tags = ['random'];
handler.command = /^cat$/i;
handler.fail = null;

export default handler;
