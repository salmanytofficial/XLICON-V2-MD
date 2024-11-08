const fetchTikTokData = async (url) => {
  try {
    const response = await fetch(`https://api.yanzbotz.live/api/downloader/tiktok?url=${encodeURIComponent(url)}&apiKey=yanzdev`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

let handler = async (messageContext, { conn, args, usedPrefix, command }) => {
  const tikTokUrl = args[0];
  if (!tikTokUrl) {
    return messageContext.reply("*🟢Example*\n *.tiktok* paste your link");
  }

  messageContext.react("⏳");

  try {
    const tikTokData = await fetchTikTokData(tikTokUrl);
    const mediaType = tikTokData.type;
    let messageContent = "╭━━⊱𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗟 \n";
    messageContent += ` *Type:* ${mediaType}\n`;
    messageContent += ` *Name:* ${tikTokData.name}\n`;
    messageContent += ` *Username:* ${tikTokData.username}\n`;
    messageContent += ` *Views:* ${tikTokData.views}\n`;
    messageContent += ` *Likes:* ${tikTokData.likes}\n`;
    messageContent += ` *Comments:* ${tikTokData.comments}\n`;
    messageContent += ` *Favorites:* ${tikTokData.favorite}\n`;
    messageContent += ` *Shares:* ${tikTokData.shares}\n`;
    messageContent += ` *Description:* ${tikTokData.description}\n╰━━━━━━━━━━━━━━━━━`;

    await conn.sendMessage(messageContext.chat, { text: `📥 *Media Type:* ${mediaType}` }, { quoted: messageContext });

    if (mediaType === "image") {
      const images = tikTokData.image;
      await conn.sendMessage(messageContext.chat, { text: messageContent }, { quoted: messageContext });

      for (let i = 0; i < images.length; i++) {
        await conn.sendMessage(messageContext.chat, {
          image: { url: images[i] },
          caption: `* Image:* ${i + 1}`
        }, { quoted: messageContext });
      }
      await conn.sendFile(messageContext.chat, tikTokData.sound, "tiktok.mp3", '', messageContext, null, { mimetype: "audio/mp4" });
    }

    if (mediaType === "video") {
      const videoUrl = tikTokData.video["no-watermark"];
      await conn.sendMessage(messageContext.chat, {
        video: { url: videoUrl },
        caption: messageContent
      }, { quoted: messageContext });
    }
  } catch (error) {
    messageContext.reply('' + mssg.error);
  }

  messageContext.react("✅");
};

handler.help = ["tiktok"];
handler.tags = ["tools"];
handler.command = /^(tiktok|tt|tiktokdl|tiktokslide|tiktoknowm|tiktokvid|ttdl)$/i;

export default handler;
