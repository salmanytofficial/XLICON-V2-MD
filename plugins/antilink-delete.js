let antilinkdel = false

let handler = async (m, { conn, usedPrefix, command }) => {
  if (command === 'on antilinkdel') {
    antilinkdel = true
    m.reply('Antilinkdel feature enabled!')
  } else if (command === 'off antilinkdel') {
    antilinkdel = false
    m.reply('Antilinkdel feature disabled!')
  } else if (command === 'antilinkdel' && antilinkdel) {
    m.messages.forEach(async (message) => {
      if (message.text && message.text.match(/\bhttps?:\/\/|www\./i)) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: (link unavailable), participant: message.participant }})
      }
    })
  }
}

handler.help = ['antilink del']
handler.tags = ['group']
handler.command = /^(on|off)?\s*antilinkdel$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
