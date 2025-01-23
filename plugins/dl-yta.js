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
🖇️ *Link*: ${firstResult.url}  
⏱️ *Duration*: ${firstResult.timestamp}  
📅 *Published*: ${firstResult.ago}  
👁️ *Views*: ${firstResult.views}  
     *MADE WITH LOVE BY XLICON V2*
───────────────
`;

    await m.react('⏳');
    
    const downloadResponse = await axios.get(`https://dark-shan-yt.koyeb.app/download/ytmp3?url=${encodeURIComponent(firstResult.url)}`);
    const downloadResult = downloadResponse.data;
    
    if (!downloadResult.status || !downloadResult.data.download) {
      throw 'Failed to fetch audio';
    }

    const vn = downloadResult.data.download;
    const title = downloadResult.data.title;
    const img = downloadResult.data.thumbnail;
    const name = m.pushName || conn.getName(m.sender);

    let con = {
      key: {
        fromMe: false,
        participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
      },
      message: {
        contactMessage: {
          displayName: `${name}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        },
      },
    };

    const doc = {
      audio: {
        url: vn,
      },
      mimetype: 'audio/mp4',
      ptt: true,
      waveform: [100, 0, 100, 0, 100, 0, 100],
      fileName: title,

      contextInfo: {
        externalAdReply: {
          title: title,
          body: message, 
          thumbnailUrl: img,
          sourceUrl: 'https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c', 
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    };

    await conn.sendMessage(m.chat, doc, { quoted: con });

  } catch (error) {
    console.error(error);
    throw 'An error occurred while processing your request.';
  }
};

handler.help = ['search and dl'];
handler.tags = ['downloader'];
handler.command = ['xplay', 'playx'];

export default handler;
