import axios from 'axios'

let handler = async (m, { text, conn, usedPrefix, command }) => {

let url = 'https://telegra.ph/file/81199f8c1cdc906cf04d0.jpg'

conn.sendButton(m.chat, "XLICON-V2", author, url, [['AUDIO', ${usedPrefix}ytmp3 ${text}], ['VIDEO', ${usedPrefix}ytmp4 ${text}]], null, [['AB stream', 'https://ab-streamer.vercel.app']], m)

  }

handler.help = ['bot']

handler.tags = ['img']

handler.command = /^(stream)$/i

export default handler
