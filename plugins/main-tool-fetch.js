import fetch from 'node-fetch';
import { format } from 'util';

let handler = async (m, { text, conn }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `🖇️ Please provide a link.\n\nExample usage:\n\`/get <url>\``;
    }
    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    }
    if (!/^https?:\/\//.test(text)) {
      throw `🖇️ The provided input is not a valid link. Please include the full URL starting with http:// or https://.`;
    }
    let _url = new URL(text);
    let url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY');
    let res = await fetch(url);
    if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
      throw `⚠️ Content-Length exceeds the limit: ${res.headers.get('content-length')}`;
    }
    if (!/text|json/.test(res.headers.get('content-type'))) {
      return conn.sendFile(m.chat, url, 'file', `Here is your requested file:\n${text}`, m);
    }
    let txt = await res.buffer();
    try {
      txt = format(JSON.parse(txt + ''));
    } catch (e) {
      txt = txt + '';
    }
    m.reply(`*RESULT:*\n\n\`\`\`${txt.slice(0, 65536)}\`\`\``);
  } catch (error) {
    console.error(error);
    m.reply(`❌ An error occurred:\n\n- _${error.message || error}_`);
  }
};

handler.help = ['get'];
handler.tags = ['tools'];
handler.command = /^(fetch|get)$/i;

export default handler;
