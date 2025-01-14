const fetchTikTokData = async (url) => {
  try {
    const response = await fetch(`https://nikka-api.us.kg/dl/tiktok?apiKey=nikka&url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data;
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
    const videoUrl = tikTokData.data;

    if (!videoUrl) {
      return messageContext.reply("⚠️ Failed to fetch TikTok video. Please check the URL and try again.");
    }

    const messageContent = `╭━━⊱𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗟\n *URL:* ${videoUrl}\n╰━━━━━━━━━━━━━━━━━`;

    await conn.sendMessage(messageContext.chat, {
      video: { url: videoUrl },
      caption: messageContent,
    }, { quoted: messageContext });
  } catch (error) {
    console.error(error);
    messageContext.reply("⚠️ Error occurred while processing your request.");
  }

  messageContext.react("✅");
};

handler.help = ["tiktok"];
handler.tags = ["tools"];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|tiktokvid|ttdl)$/i;

export default handler;
