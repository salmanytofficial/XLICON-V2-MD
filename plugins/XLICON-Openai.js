import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.\n\nUsage:\n${usedPrefix}${command} <your-text>`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  const baseForbiddenCommands = ['promote', 'demote', 'kick', 'ban', 'addowner', 'removeowner'];
  const prefixes = [usedPrefix, '$', '=>', '>', 'm'];
  const forbiddenCommands = prefixes.flatMap(prefix => baseForbiddenCommands.map(cmd => `${prefix}${cmd}`));
  const shellCommands = ['rm', 'ls', 'cat', 'mkdir', 'chmod', 'curl', 'wget', 'sudo'];
  const containsForbiddenCommand = forbiddenCommands.some(cmd => text.includes(cmd));
  const containsShellCommand = shellCommands.some(cmd => text.includes(cmd) && !text.startsWith("What is"));
  const containsSpecialChars = /[><=;|&%]/.test(text); 
  if (containsForbiddenCommand || containsShellCommand || containsSpecialChars) {
    throw `Your input contains restricted or dangerous commands. Please avoid using commands like ${forbiddenCommands.join(', ')}, or dangerous shell commands like rm, ls, etc.`;
  }

  try {
    m.react(rwait);

    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const guru1 = `https://api.gurusensei.workers.dev/llama?prompt=${prompt}`;

    try {
      let response = await fetch(guru1);
      let data = await response.json();
      let result = data.response.response;

      if (!result) {
        throw new Error('No valid JSON response from the first API');
      }

      const containsForbiddenResponse = forbiddenCommands.some(cmd => result.includes(cmd));
      const containsShellCommandInResponse = shellCommands.some(cmd => result.includes(cmd));
      const containsSpecialCharsInResponse = /[><=;|&%]/.test(result);

      if (containsForbiddenResponse || containsShellCommandInResponse || containsSpecialCharsInResponse) {
        throw new Error('AI response contains forbidden or dangerous command!');
      }

      await conn.sendMessage(m.chat, {
        text: result,
        contextInfo: {
          externalAdReply: {
            title: "Your AI Response",
            body: "Powered by AB TECH (XLICON V2)",
            thumbnailUrl: "https://telegra.ph/file/403a47e628ef49dee27a3.jpg",
            sourceUrl: "https://github.com/salmanytofficial/XLICON-V2-MD",
          }
        }
      }, { quoted: m });

      m.react(done);
    } catch (error) {
      console.error('Error from the first API:', error);

      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(guru2);
      let data = await response.json();
      let result = data.completion;

      const containsForbiddenFallback = forbiddenCommands.some(cmd => result.includes(cmd));
      const containsShellCommandInFallback = shellCommands.some(cmd => result.includes(cmd));
      const containsSpecialCharsInFallback = /[><=;|&%]/.test(result); 

      if (containsForbiddenFallback || containsShellCommandInFallback || containsSpecialCharsInFallback) {
        throw new Error('AI response contains forbidden or dangerous command!');
      }

      await conn.sendMessage(m.chat, {
        text: result,
        contextInfo: {
          externalAdReply: {
            title: "Fallback AI Response",
            body: "Powered by AB TECH (XLICON V2)",
            thumbnailUrl: "https://telegra.ph/file/403a47e628ef49dee27a3.jpg",
            sourceUrl: "https://github.com/salmanytofficial/XLICON-V2-MD",
          }
        }
      }, { quoted: m });

      m.react(done); 
    }
  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};

handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['bro', 'chatgpt', 'ai', 'gpt'];

export default handler;
