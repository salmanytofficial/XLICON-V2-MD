import fetch from 'node-fetch';
import { format } from 'util';

let handler = async (m, { text, conn }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      return m.reply(
        `🖇️ Please provide a valid link.\n\nUsage:\n\`/get <url>\``
      );
    }
    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    }
    if (!/^https?:\/\//.test(text)) {
      throw new Error(
        `🖇️ The provided input is not a valid URL. Make sure it starts with http:// or https://.`
      );
    }
    const parsedUrl = new URL(text);
    const apiUrl = global.API(
      parsedUrl.origin,
      parsedUrl.pathname,
      Object.fromEntries(parsedUrl.searchParams.entries()),
      'APIKEY'
    );
    const response = await fetch(apiUrl);
    const contentType = response.headers.get('content-type');
    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 100 * 1024 * 1024) {
      throw new Error(
        `⚠️ The file size exceeds the limit: ${contentLength} bytes.`
      );
    }
    if (!/text|json/.test(contentType)) {
      await conn.sendFile(
        m.chat,
        apiUrl,
        'file',
        `Here is your requested file:\n${text}`,
        m
      );
      return;
    }
    const buffer = await response.buffer();
    let output;
    try {
      output = format(JSON.parse(buffer.toString()));
    } catch (e) {
      output = buffer.toString();
    }
    m.reply(`*RESULT:*\n\n\`\`\`${output.slice(0, 65536)}\`\`\``);
  } catch (err) {
    console.error(err);
    m.reply(
      `❌ An error occurred:\n\n- ${err.message || err.toString()}`
    );
  }
};
handler.help = ['get'];
handler.tags = ['tools'];
handler.command = /^(fetch|get)$/i;

export default handler;
