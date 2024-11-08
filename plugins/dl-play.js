import axios from 'axios';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    throw `Please provide a search query. Example: ${usedPrefix + command} <query>`;
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
    throw 'An error occurred while searching for the YouTube video or fetching the audio.';
  }
};

handler.help = ['play'].map(command => command + ' <query>');
handler.tags = ['downloader'];
handler.command = /^play$/i;
handler.exp = 0;

export default handler;
