import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw `Please provide some text to get a response.\n\nUsage:\n${usedPrefix}${command} <your-text>`;

    await m.react('🤖'); 

    const prompt = encodeURIComponent(text);
    let apiurl = `https://bk9.fun/ai/blackbox?q=${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();

    if (!response.BK9) throw 'No result found';

    const replyText = response.BK9;
    await conn.sendMessage(m.chat, {
      text: `*HERE:*\n\n- _${replyText}_`,
      contextInfo: {
        externalAdReply: {
          title: "AI Response",
          body: "Powered by AB TECH",
          thumbnailUrl: "https://telegra.ph/file/403a47e628ef49dee27a3.jpg",
          sourceUrl: "https://github.com/salmanytofficial/XLICON-V2-MD",
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    m.reply('Oops! Something went wrong. We are trying hard to fix it ASAP.');
  }
};

handler.help = ['bing <text>'];
handler.tags = ['tools'];
handler.command = /^(bing)$/i;

export default handler;
