 import fetch from 'node-fetch';
let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.\n\nUsage:\n${usedPrefix}${command} <your-text>`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    if (typeof m.react === "function") m.react(rwait);

    conn.sendPresenceUpdate('composing', m.chat);

    const prompt = encodeURIComponent(text);
    const apiKey = 'nikka';
    const apiUrl = `https://nikka-api.us.kg/ai/groq?q=${prompt}&apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.data) {
      throw new Error('Invalid response from the API');
    }

    const result = data.data;

    await conn.sendMessage(m.chat, {
      text: `*Response:*\n\n- _${result}_`,
      contextInfo: {
        externalAdReply: {
          title: "Your AI Response",
          body: "Powered by AB TECH (XLICON V2)",
          thumbnailUrl: "https://telegra.ph/file/403a47e628ef49dee27a3.jpg",
          sourceUrl: "https://github.com/salmanytofficial/XLICON-V2-MD",
        }
      }
    }, { quoted: m });

    if (typeof m.react === "function") m.react(done);
  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR: Unable to fetch response*`;
  }
};

handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['bro', 'chatgpt', 'ai', 'gpt'];

export default handler;
