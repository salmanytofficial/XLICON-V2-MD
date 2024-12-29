import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let handler = async (message) => {
  let mediaMessage = message.quoted ? message.quoted : message;
  let mimeType = (mediaMessage.msg || mediaMessage).mimetype || '';

  if (!mimeType) {
    throw "✳️ Respond to an image/video";
  }

  await message.react('⏳');

  let mediaData = await mediaMessage.download();

  if (mediaData.length > 10485760) {
    throw "✴ Media size exceeds 10 MB. Please upload a smaller file.";
  }

  let isImage = /image\/(png|jpe?g|gif)|video\/mp4/.test(mimeType);

  let mediaUrl = await (isImage ? uploadImage : uploadFile)(mediaData);

  try {
    if (mediaUrl) {
      let response = await (await fetch(`https://bk9.fun/ai/geminiimg?url=${mediaUrl}&q=${message.text}`)).json();
      console.log(response);
      await message.react('✅');
      const replyMessage = { text: response.BK9 };
      await conn.sendMessage(message.chat, replyMessage, { quoted: message });
      await conn.sendMessage(message.chat, {
        text: response.BK9,
        contextInfo: {
          externalAdReply: {
            title: "Your AI Response",
            body: "Powered by AB TECH (XLICON V2)",
            thumbnailUrl: "https://telegra.ph/file/403a47e628ef49dee27a3.jpg",
            sourceUrl: "https://github.com/salmanytofficial/XLICON-V2-MD",
          }
        }
      }, { quoted: message });

    } else {
      message.reply(`♕ ${mediaData.length} Byte(s) \n♕ (Unknown)`);
      await message.react('✅');
    }
  } catch (error) {
    console.error("Failed to fetch AI response", error);
    message.reply("An error occurred while fetching the AI response.");
  }
};

handler.help = ['gem'];
handler.tags = ['study'];
handler.command = /^(gem|gemimg)$/i;

export default handler;
