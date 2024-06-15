import 'api-dylux';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `✳️ Give the link of the video TikTok or quote a TikTok link\n\n 📌 Example: ${usedPrefix + command} https://vm.tiktok.com`;
  }
  if (!args[0].match(/tiktok/gi)) {
    throw "❎ Please provide a valid TikTok Link";
  }

  m.react(rwait);
  
  try {
    let response = await fetch(global.API("fgmods", '/api/downloader/tiktok', { 'url': args[0] }, "apikey"));
    let result = await response.json();
    
    if (!result.result.images) {
      let message = `
┌─⊷ *XLICON 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗟* 
┃ *Name:* ${result.result.author.nickname}
┃ *Username:* ${result.result.author.unique_id}
┃ *Duration:* ${result.result.duration}
┃ *Likes:* ${result.result.digg_count}
┃ *Views:* ${result.result.play_count}
┃ *Description:* ${result.result.title}
└───────────
      `;
      await conn.sendFile(m.chat, result.result.play, "tiktok.mp4", message, m);
      m.react(done);
    } else {
      let message = `
┌─⊷ *XLICON 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗟*           
┃ *Likes:* ${result.result.digg_count}
┃ *Description:* ${result.result.title}
└───────────
      `;
      for (let image of result.result.images) {
        await conn.sendMessage(m.chat, { image: { url: image }, caption: message }, { quoted: m });
      }
      await conn.sendFile(m.chat, result.result.play, "tiktok.mp3", '', m, null, { mimetype: "audio/mp4" });
      m.react(done);
    }
  } catch (error) {
    console.error(error);
    m.reply("❎ Error");
  }
};

handler.help = ["tiktok"];
handler.tags = ['dl'];
handler.command = ["tiktok", 'tt', "tiktokimg", 'tk'];

export default handler;
