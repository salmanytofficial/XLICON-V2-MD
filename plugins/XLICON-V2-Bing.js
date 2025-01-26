import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw 'uhm.. what do you want to say?';

    const baseForbiddenCommands = ['promote', 'demote', 'kick', 'ban', 'addowner', 'removeowner'];
    const prefixes = [usedPrefix, '$', '=>', '>', 'm'];
    const forbiddenCommands = prefixes.flatMap(prefix => baseForbiddenCommands.map(cmd => `${prefix}${cmd}`));
    const shellCommands = ['rm', 'ls', 'cat', 'mkdir', 'chmod', 'curl', 'wget', 'sudo'];
    const containsForbiddenCommand = forbiddenCommands.some(cmd => text.includes(cmd));
    const containsShellCommand = shellCommands.some(cmd => text.includes(cmd));
    const containsSpecialChars = /[><=;|&%]/.test(text); 

    
    if (containsForbiddenCommand || containsShellCommand || containsSpecialChars) {
      throw `Your input contains a restricted command or dangerous characters. Please avoid using commands like ${forbiddenCommands.join(', ')}, or dangerous shell commands like rm, ls, etc., in AI interactions.`;
    }

    await m.react('🤖'); 

    const prompt = encodeURIComponent(text);
    let apiurl = `https://bk9.fun/ai/blackbox?q=${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();

    if (!response.BK9) throw 'No result found';

    const replyText = response.BK9;
    await conn.relayMessage(m.chat, {
      requestPaymentMessage: {
        currencyCodeIso4217: 'INR',
        amount1000: 99999,
        requestFrom: m.sender,
        noteMessage: {
          extendedTextMessage: {
            text: replyText,
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
