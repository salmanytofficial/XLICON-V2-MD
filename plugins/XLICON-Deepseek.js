import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw 'Uhm.. what do you want to say?';
    
    await m.react('⏳');

    let apiUrl = "https://ai.clauodflare.workers.dev/chat";
    let payload = {
      model: "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
      messages: [{ role: "user", content: text }],
    };

    const { data } = await axios.post(apiUrl, payload, {
      headers: { "Content-Type": "application/json" }
    });

    if (!data || !data.data || !data.data.response) {
      throw 'No result found';
    }

    let replyText = data.data.response.split("</think>").pop().trim();
    let markdownText = `*RESULTS:*\n\n*DeepSeek AI Response:*\n\n- _${replyText}_`;

    await conn.sendMessage(m.chat, { text: markdownText }, { quoted: m });
    await m.react('✅');
  } catch (error) {
    console.error("Error:", error);
    await m.react('❌');
    m.reply('Oops! Something went wrong. Please try again later.');
  }
};

handler.help = ['deepseek <text>'];
handler.tags = ['ai'];
handler.command = /^(deepseek)$/i;

export default handler;
