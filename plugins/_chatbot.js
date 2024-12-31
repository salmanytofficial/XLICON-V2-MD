import fetch from 'node-fetch';
import axios from 'axios';

export async function before(m, { conn }) {
  try {
    if (m.isBaileys && m.fromMe) {
      return true;
    }
    
    if (!m.isGroup) {
      return false;
    }

    const users = global.db.data.users;
    const chats = global.db.data.chats;

    const user = global.db.data.users[m.sender];
    const chat = global.db.data.chats[m.chat];
    let name = conn.getName(m.sender);

    if (m.mtype === 'protocolMessage' || m.mtype === 'pollUpdateMessage' || m.mtype === 'reactionMessage' || m.mtype === 'stickerMessage') {
      return;
    }

    if (!m.msg || !m.message || m.key.remoteJid !== m.chat || users[m.sender].banned || chats[m.chat].isBanned) {
      return;
    }

    if (!m.quoted || !m.quoted.isBaileys) return;

    if (!chat.chatbot) { 
      return true;
    }
    
    const msg = encodeURIComponent(m.text);
    console.log(`Encoded message: ${msg}`);
    
    const response = await axios.get(`https://api.giftedtech.my.id/api/ai/geminiai?apikey=gifted&q=${msg}`);

    if (response && response.data) {
      const data = response.data;
      if (data.success) {
        let reply = data.result;
        if (reply) {
          reply = reply.replace(/Google/gi, 'Abraham And Salman');
          reply = reply.replace(/a multimodal AI model/gi, botname);
          await conn.sendMessage(m.chat, { text: `✅ *oh okay = *\n♕ *Response:* ${reply}` }, { quoted: m });
        }
      } else {
        await conn.sendMessage(m.chat, { text: "No suitable response from the API." }, { quoted: m });
      }
    } else {
      await conn.sendMessage(m.chat, { text: "Error: No response from the API." }, { quoted: m });
    }
  } catch (error) {
    console.error('Error in before function:', error);
    await conn.sendMessage(m.chat, { text: "An error occurred while processing your request." }, { quoted: m });
  }
}
