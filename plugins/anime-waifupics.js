import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    await m.react('⏳'); 

    let type = command.toLowerCase();
    let baseUrl = 'https://weeb-api.vercel.app/';

    const fetchImage = async (endpoint) => {
      try {
        const response = await fetch(baseUrl + endpoint);
        if (!response.ok) throw `❎ Error fetching ${type} image`;
        const imageBuffer = await response.buffer();
        await conn.sendFile(m.chat, imageBuffer, 'img.jpg', `✅ Random ${type}`, m);
        await m.react('✅'); 
      } catch (error) {
        console.error(error);
        await m.reply(`❎ An error occurred while fetching the ${type} image.`);
      }
    };

    switch (type) {
      case 'loli':
        await fetchImage('loli');
        break;

      case 'waifu':
        await fetchImage('waifu');
        break;

      case 'neko':
        await fetchImage('neko');
        break;

      case 'zerotwo':
        await fetchImage('zerotwo');
        break;

      default:
        await m.reply(`❎ Invalid command. Try ${usedPrefix}waifu, ${usedPrefix}neko, ${usedPrefix}zerotwo, or ${usedPrefix}loli.`);
        break;
    }
  } catch (err) {
    console.error(err);
    await m.reply('❎ An unexpected error occurred.');
  }
};

handler.help = ['waifu', 'neko', 'zerotwo', 'loli'];
handler.tags = ['anime'];
handler.command = ['waifu', 'neko', 'zerotwo', 'loli'];

export default handler;
