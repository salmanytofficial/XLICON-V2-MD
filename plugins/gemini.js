import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `uhm.. what do you want to say?`;

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

    m.react('🤖');

    const response = await fetch(`https://bk9.fun/ai/gemini?q=${encodeURIComponent(text)}`);
    const result = await response.json();
    
    if (result.status) {
      m.reply(result.BK9);
    } else {
      m.reply('Oops! Something went wrong, we are trying hard to fix it ASAP.');
    }
  } catch (error) {
    console.error(error);
    m.reply('Oops! Something went wrong, we are trying hard to fix it ASAP.');
  }
};

handler.help = ['gemini <text>'];
handler.tags = ['tools'];
handler.command = /^(gemini)$/i;

export default handler;
