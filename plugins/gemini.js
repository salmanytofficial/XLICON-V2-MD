import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw `Please provide some text to get a response.\n\nUsage:\n${usedPrefix}${command} <your-text>`;

    await m.react('🤖'); 

    const response = await fetch(`https://bk9.fun/ai/gemini?q=${encodeURIComponent(text)}`);
    const result = await response.json();

    if (result.status) {
      
      const replyText = result.BK9;
      m.reply(`*YOUR ANSWER:*\n\n- _${replyText}_`);
    } else {
      m.reply('Oops! Something went wrong. We are trying hard to fix it ASAP.');
    }
  } catch (error) {
    console.error(error);
    m.reply('Oops! Something went wrong. We are trying hard to fix it ASAP.');
  }
};

handler.help = ['gemini <text>'];
handler.tags = ['tools'];
handler.command = /^(gemini)$/i;

export default handler;
