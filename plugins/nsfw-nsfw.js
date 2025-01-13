import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 group doesnt supprt nsfw \n\n enable it by \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ you need to be atleast 18 years`) 
   
m.react(rwait)
let type = (command).toLowerCase()

switch (type) {

case 'ass':
case 'gand':
    m.reply("  *ɴsғᴡ Uɴᴀᴠᴀɪʟᴀʙʟᴇ*")
break

case 'boobs':
case 'boobies':
   m.reply("  *ɴsғᴡ Uɴᴀᴠᴀɪʟᴀʙʟᴇ*")
break

case 'pussy':
case 'chut':		
   m.reply("  *ɴsғᴡ Uɴᴀᴠᴀɪʟᴀʙʟᴇ*")
break

case 'lesbians':
case 'lesbian':
   m.reply("  *ɴsғᴡ Uɴᴀᴠᴀɪʟᴀʙʟᴇ*")
break

case 'pack':
case 'cosplay':
   m.reply("  *ɴsғᴡ Uɴᴀᴠᴀɪʟᴀʙʟᴇ*") 
	break


default:
 }
}
// handler.help = ['ass', 'boobs', 'lesbian', 'pussy', 'pack']
// handler.tags = ['nsfw']
handler.command = /^(ass|gand|boobs|boobies|lesbian|lesbians|pussy|chut|cosplay|pack)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler
