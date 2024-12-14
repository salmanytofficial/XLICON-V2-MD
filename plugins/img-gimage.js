import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Example:* *${usedPrefix + command} cats*`;

  const prohibited = ['fuck', 'porn', 'pussy', 'hentai', 'pornhub', 'xnxx', 'xvideos', 'vagina', 'horny', 'ass', 'nude', 'nsfw', 'sex', 'blowjob', 'anal', '+18', 'hot', 'xxx'];
  if (prohibited.some(word => text.toLowerCase().includes(word))) {
    return m.reply('*⚠️ OHY, BOT WON\'T SEND BECAUSE ABRAHAM HAS CODED ME TO NOT ALLOW +18 CONTENTS :( *');
  }

  const match = text.match(/(\d+)/);
  const numberOfImages = match ? parseInt(match[1]) : 3;

  try {
    for (let i = 0; i < numberOfImages; i++) {
      const res = await fetch(`https://scrape-un.onrender.com/api/wallpaper?query=${encodeURIComponent(text)}`);
      if (!res.ok) throw new Error('Failed to fetch images');
      
      const json = await res.json();
      if (!json.results || json.results.length === 0) throw new Error('No results found');

      const image = json.results[Math.floor(Math.random() * json.results.length)].url;
      await conn.sendFile(m.chat, image, 'image.jpg', `*💞 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}*`, m);
    }
  } catch (error) {
    m.reply('⚠️ Sorry, there was an error fetching the images. Please try again later.');
  }
};

handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'downloader'];
handler.command = /^(gimage|image|imagen|img)$/i;

export default handler;
