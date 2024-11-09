import axios from 'axios';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    throw `Please provide link . Example: ${usedPrefix + command} <query>`;
  }
  await m.react('⏳');
  try {
    const query = encodeURIComponent(text);
    const title = text; 

    var aud = `https://ironman.koyeb.app/ironman/dl/yta?url=${query}`;
    await conn.sendMessage(m.chat, {
      audio: { url: aud },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: title,
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    throw 'verify it is a link.';
  }
};

handler.help = ['ytm'].map(command => command + ' <query>');
handler.tags = ['downloader'];
handler.command = /^ytm$/i;
handler.exp = 0;

export default handler;
