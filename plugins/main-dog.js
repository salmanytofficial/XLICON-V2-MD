import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const img = await res.json();
    const caption = `_Dog🐕_`.trim();

   
    conn.sendFile(m.chat, img[0].url, 'dog.jpg', caption, m);

    
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
      const forwardMessage = `This message was ${forwardInfo}.
Content: ${m.quoted.text || "(No Text Content)"}`;

      
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

handler.help = ['test1'];
handler.tags = ['random'];
handler.command = /^test1$/i;
handler.fail = null;

export default handler;
