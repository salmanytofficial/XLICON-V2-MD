import { delay } from '@whiskeysockets/baileys';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (text.toLowerCase() === 'teddy') { 
      let teddyBear = ['🧸', '🐻', '❤️', '🧸', '🐻', '❤️', '🧸', '🐻', '❤️'];
      for (let i = 0; i < teddyBear.length; i++) {
        await conn.sendMessage(m.chat, { text: `Here's a teddy bear for you: ${teddyBear[i]}` }, { quoted: m });
        await delay(500);
      }
    }
    await conn.chatRead(m.chat);
    await m.reply('✅');
  } catch (error) {
    console.error(error);
    await m.reply('Oops! Something went wrong.');
  }
};

handler.help = ['teddy'];
handler.tags = ['fun'];
export default handler;
