import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p }) => {
  let img = 'https://telegra.ph/file/403a47e628ef49dee27a3.jpg'
  let info = `*BOT ACTIVE AND RUNNING..*`
  await conn.reply(m.chat, info, m, {
    contextInfo: {
      forwardingScore: 256,
      isForwarded: true,
      externalAdReply: {
        title: author,
        body: botname,
        sourceUrl: fgyt,
        thumbnail: await conn.getFile(img),
      },
    },
  })
}
handler.customPrefix = /^(test|rise|Arise|bot)$/i
handler.command = new RegExp()

export default handler
