import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let videoUrl = "https://files.catbox.moe/0xqrce.mp4";
    let caption = 'I AM ATOMIC⇘⥣⇙';

    let videoMessage = {
      video: { url: videoUrl },
      caption: caption,
      contextInfo: {
        externalAdReply: {
          title: "↺ |◁ II ▷| ♡",
          body: "XLICON V2",
          thumbnailUrl: "https://avatars.githubusercontent.com/u/120536940?v=4",
          sourceUrl: "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c",
          mediaType: 2,
          mediaUrl: "https://instagram.com/abraham.dwamena.182",
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, videoMessage, { quoted: m });
  } catch (err) {
    console.error(err);
    throw '*Error!*';
  }
};

handler.customPrefix = /^(Atomic)$/i;
handler.command = new RegExp();

export default handler;
