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
───────────────
✨ ${firstResult.title} ✨
───────────────
🖇️ *Link*: ${firstResult.url} ${firstResult.url}  
⏱️ *Duration*: ${firstResult.timestamp}  
📅 *Published*: ${firstResult.ago}  
👁️ *Views*: ${firstResult.views}  
     *MADE WITH LOVE BY XLICON V2*
───────────────
`;
    await conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
    
    await m.react('⏳');
    
    const downloadResponse = await axios.get(`https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(firstResult.url)}`);
    const downloadResult = downloadResponse.data;
    
    if (!downloadResult.success) {
      throw 'Failed to fetch audio';
    }

    await conn.sendMessage(m.chat, {
      audio: { url: downloadResult.result.download_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: downloadResult.result.title,
    }, { quoted: m });

  } catch (error) {
    console.error(error);
    throw 'An error occurred while processing your request.';
  }
};

handler.help = ['search and dl'];
handler.tags = ['downloader'];
handler.command = ['ytm', 'play'];

export default handler;
