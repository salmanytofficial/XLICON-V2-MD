import axios from 'axios';
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data;
    let url = await res[Math.floor(res.length * Math.random())];
    conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m);

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
  } catch {
    throw '*Error!*';
  }
};

handler.help = ['messi'];
handler.tags = ['img'];
handler.command = /^(messi)$/i;
export default handler;
