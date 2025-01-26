import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw 'Uhm.. what do you want to say?';
    await m.react('🤖');

    const prompt = encodeURIComponent(text);
    let apiurl = `https://bk9.fun/ai/blackbox?q=${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();

    if (!response.BK9) throw 'No result found';

    const replyText = response.BK9;
    const markdownText = `*Response:*\n\n- _${replyText}_`;

    await conn.relayMessage(m.chat, {
      requestPaymentMessage: {
        currencyCodeIso4217: 'INR',
        amount1000: 99999,
        requestFrom: m.sender,
        noteMessage: {
          extendedTextMessage: {
            text: markdownText,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true
              }
            }
          }
        }
      }
    }, {});
  } catch (error) {
    console.error(error);
    m.reply('Oops! Something went wrong. We are trying hard to fix it ASAP.');
  }
};

handler.help = ['bing <text>'];
handler.tags = ['tools'];
handler.command = /^(bing)$/i;

export default handler;
