let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `uhm.. what do you want to say?`
    m.react('🤖')

    const response = await fetch(`https://bk9.fun/ai/gemini?q=${encodeURIComponent(text)}`);
    const result = await response.json();
    
    if (result.status) {
      m.reply(result.BK9);
    } else {
      m.reply('Oops! Something went wrong. , we are trying had to fix it asap');
    }
  } catch (error) {
    console.error(error);
    m.reply('Oops! Something went wrong. , we are trying had to fix it asap');
  }
}

handler.help = ['gemini <text>']
handler.tags = ['tools']
handler.command = /^(gemini)$/i

export default handler
