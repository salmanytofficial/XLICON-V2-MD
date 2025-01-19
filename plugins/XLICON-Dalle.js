import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `*This command generates images from text prompts*\n\n*Example usage*\n*◉ ${usedPrefix + command} Beautiful anime girl*\n*◉ ${usedPrefix + command} Elon Musk in pink outfit*`

  try {
    m.reply('*Please wait, generating images...*')

    const endpoint = `https://api.gurusensei.workers.dev/dream?prompt=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)

    if (response.ok) {
      const imageBuffer = await response.buffer()
      await conn.sendFile(m.chat, imageBuffer, 'image.jpg', 'Here is your Result', m)
    } else {
      throw '*Image generation failed*'
    }
  } catch {
    throw '*Oops! Something went wrong while generating images. Please try again later.*'
  }
}

handler.help = ['dalle']
handler.tags = ['AI']
handler.command = ['dalle', 'gen', 'openai2']
export default handler
