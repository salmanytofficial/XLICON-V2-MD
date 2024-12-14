import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw '✳️ What do you want me to search for on YouTube?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'No results found for the given query.';
    }

    const firstResult = results[0];

    const message = `
乂 ${firstResult.title}
乂 *Link* : ${firstResult.url}
乂 *Duration* : ${firstResult.timestamp}
乂 *Published :* ${firstResult.ago}
乂 *Views:* ${firstResult.views}
    `;

    await conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
    
    await m.react('⏳');
    
    const downloadUrl = `https://ironman.koyeb.app/ironman/dl/yta?url=${encodeURIComponent(firstResult.url)}`;
    const title = firstResult.title;

    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: title,
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    throw 'An error occurred while processing your request.';
  }
};

handler.help = ['search and dl'];
handler.tags = ['downloader'];
handler.command = ['ytm', 'play3'];

export default handler;
