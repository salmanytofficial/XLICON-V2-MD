// NO GITA STUFF ALLOWED
import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text && !(m.quoted && m.quoted.text)) {
  if (!text) {
    throw `*_Need query._*\n*_Example:_* _${usedPrefix + command} When did Jesus Christ die?_`;
  }
     }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  m.react('⚡')
  try {
    conn.sendPresenceUpdate('composing', m.chat);
    

    const API_URL = `https://vihangayt.me/tools/chatgpt5?q=Hi${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    m.react(done)
    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '*Could not get a valid answer sorry 😅.*';
    }
  } catch (error) {
    throw `*oops api error. Please try again later😅.*`;
  }
};

handler.command = /^gpt5$/i;
handler.tags = ['study'];

export default handler;
