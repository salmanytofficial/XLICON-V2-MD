//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('The bot has been deactivated in this gc 😔')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'chatoff'] 

export default handler
 
