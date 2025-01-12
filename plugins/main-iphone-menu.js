import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `_User not found!_`
let pp = './XLICON.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `

ㅤㅤㅤㅤㅤㅤ𒅒 𝗜𝗠𝗘𝗡𝗨 ᳄ 𝗜𝗚𝗚𝗔 

ㅤ┌─𒀱ꪳ  𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙓𝙇𝙄𝘾𝙊𝙉 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ
ㅤ| ⚙️  *ʙᴏᴛ*       𝗫𝗹𝗶𝗰𝗼𝗻𝗩2
ㅤ| 💻  *ʜᴏsᴛ*      𝗟𝗶𝗻𝘂𝘅
ㅤ|      *ᴘʀᴇғɪx*    ${usedPrefix} 
ㅤ|      *ʀᴜɴᴛɪᴍᴇ*   ${uptime}
ㅤ|      *ᴅᴀᴛᴀʙᴀsᴇ*  ${rtotalreg} of ${totaluser} 
ㅤ|      *ᴜsᴇʀs*     ${totaluser} 
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙋𝙧𝙚𝙨𝙚𝙣𝙩
ㅤ|    *ᴅᴀᴛᴇ* ${date} 
ㅤ|    *ᴛɪᴍᴇ* ${wib} 
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙐𝙨𝙚𝙧 
ㅤ|     *ɴᴀᴍᴇ*   ${taguser} 
ㅤ|     *ɢᴇᴍs*   -ɪɴғɪɴɪᴛᴇ
ㅤ|     *ʀᴀɴᴋ*   ${role}
ㅤ|     *ᴇxᴘ*    ${exp} 
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤㅤㅤㅤㅤ ㅤㅤ  ㅤ𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨

ㅤ┌─𒀱ꪳ  𝙍𝙚𝙡𝙞𝙜𝙞𝙤𝙪𝙨
ㅤ┃❏ㅤ${usedPrefix}ʙɪʙʟᴇ [ ᴄʜ_ɴᴜᴍ|ᴄʜ_ɴᴀᴍᴇ]
ㅤ┃❏ㅤ${usedPrefix}ǫᴜʀᴀɴ [sᴜʀᴀʜ_ɴᴜᴍ|sᴜʀᴀʜ_ɴᴀᴍᴇ]
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙄𝙣𝙩𝙚𝙡𝙡𝙞𝙜𝙚𝙣𝙘𝙚
ㅤ┃❏ㅤ${usedPrefix}ʙɪɴɢɪᴍɢ2
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴀᴛɢᴘᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴀɪsᴇᴀʀᴄʜ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴀɴɪᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ɢɪᴛᴀɢᴘᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴀᴛ
ㅤ┃❏ㅤ${usedPrefix}ʙʟᴀᴄᴋʙᴏx
ㅤ┃❏ㅤ${usedPrefix}ʙɪɴɢɪᴍɢ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴄᴀʀᴛᴏᴏɴ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴀʟʟ ᴇ
  ┗─══━━━━✥◈✥━━━━══┛
  
ㅤ┌─𒀱ꪳ  𝙄𝙢𝙖𝙜𝙚
ㅤ┃❏${usedPrefix}ʙʟᴀᴄᴋᴘɪɴᴋ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙏𝙤𝙤𝙡𝙨
ㅤ┃❏ㅤ${usedPrefix}ɢᴇᴍɪɴɪ
ㅤ┃❏ㅤ${usedPrefix}ɴᴏᴡᴀ
ㅤ┃❏ㅤ${usedPrefix}ǫʀ
ㅤ┃❏ㅤ${usedPrefix}ǫʀᴄᴏᴅᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴇᴀᴛʜᴇʀ
ㅤ┃❏ㅤ${usedPrefix}sʜᴏʀᴛʟɪɴᴋ
ㅤ┃❏ㅤ${usedPrefix}ʙɪᴛʟʏ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʜᴀᴢᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇᴄᴏʟᴏʀ
ㅤ┃❏ㅤ${usedPrefix}ʜᴅʀ
ㅤ┃❏ㅤ${usedPrefix}ɢᴇᴛ
ㅤ┃❏ㅤ${usedPrefix}ʟᴇɴɢᴛʜ
ㅤ┃❏ㅤ${usedPrefix}ᴛɪɴʏᴜʀʟ
ㅤ┃❏ㅤ${usedPrefix}sʜᴏʀᴛᴇɴ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴇᴍᴘᴍᴀɪʟ
ㅤ┃❏ㅤ${usedPrefix}sʜᴀᴢᴀᴍ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴀʟ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴀʀʙᴏɴ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇғɪɴᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴇʟᴇᴍᴇɴᴛ
ㅤ┃❏ㅤ${usedPrefix}ɪᴛᴜɴᴇs
ㅤ┃❏ㅤ${usedPrefix}ʟʏʀɪᴄs
ㅤ┃❏ㅤ${usedPrefix}ɪᴍᴅʙ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏᴜʀsᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴀɴᴅᴏᴍᴄᴏᴜʀsᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇᴀᴅᴍᴏʀᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇᴀᴅᴠᴏ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇᴍᴏᴠᴇʙɢ
ㅤ┃❏ㅤ${usedPrefix}ss
ㅤ┃❏ㅤ${usedPrefix}ssғ
ㅤ┃❏ㅤ${usedPrefix}sᴛʏʟᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴜʙʀᴇᴅᴅɪᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴇʟᴇsᴛɪᴄᴋᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴜʀʟ
ㅤ┃❏ㅤ${usedPrefix}ᴛʀᴀɴsʟᴀᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴛs
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴛʀᴜᴇ
ㅤ┃❏ㅤ${usedPrefix}ғɪɴᴅᴍᴜsɪᴄ
ㅤ┃❏ㅤ${usedPrefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙂𝙧𝙤𝙪𝙥𝘾𝙝𝙖𝙩
ㅤ┃❏ㅤ${usedPrefix}ɢᴇᴛʙɪᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴀɴɪᴍᴇǫᴜᴏᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛᴅᴇsᴄ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛɴᴀᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴅᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴇᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴡᴀʀɴ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇᴍᴏᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ɪɴғᴏɢᴘ
ㅤ┃❏ㅤ${usedPrefix}ʜɪᴅᴇᴛᴀɢ
ㅤ┃❏ㅤ${usedPrefix}ɪɴᴠɪᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴋɪᴄᴋ
ㅤ┃❏ㅤ${usedPrefix}ʟɪɴᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴘᴏʟʟ
ㅤ┃❏ㅤ${usedPrefix}ᴘʀᴏғɪʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴘʀᴏᴍᴏᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇsᴇᴛʟɪɴᴋ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛʙʏᴇ
ㅤ┃❏ㅤ${usedPrefix}ɢʀᴏᴜᴘ ᴏᴘᴇɴ/ᴄʟᴏsᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛᴡᴇʟᴄᴏᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}sɪᴍᴜʟᴀᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴛᴀғғ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴀɢᴀʟʟ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴛᴀɢ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀʀɴ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀʀɴs
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘼𝙣𝙞𝙢𝙚
ㅤ┃❏ㅤ${usedPrefix}ᴀɴɪᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴋɪʀᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴋɪʏᴀᴍᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴀɴɴᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴀsᴜɴᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴀʏᴜᴢᴀᴍᴀ
ㅤ┃❏ㅤ${usedPrefix}ʙᴏʀᴜᴛᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜɪʜᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜɪᴛᴏɢᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇɪᴅᴀʀᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴇʀᴢᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴇʟᴀɪɴᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴇʙᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴇᴍɪʟɪᴀ
ㅤ┃❏ㅤ${usedPrefix}ʜᴇsᴛɪᴀ
ㅤ┃❏ㅤ${usedPrefix}ʜɪɴᴀᴛᴀ
ㅤ┃❏ㅤ${usedPrefix}ɪɴᴏʀɪ
ㅤ┃❏ㅤ${usedPrefix}ɪsᴜᴢᴜ
ㅤ┃❏ㅤ${usedPrefix}ɪᴛᴀᴄʜɪ
ㅤ┃❏ㅤ${usedPrefix}ɪᴛᴏʀɪ
ㅤ┃❏ㅤ${usedPrefix}ᴋᴀɢᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴋᴀɢᴜʀᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴋᴀᴏʀɪ
ㅤ┃❏ㅤ${usedPrefix}ᴋᴇɴᴇᴋɪ
ㅤ┃❏ㅤ${usedPrefix}ᴋᴏᴛᴏʀɪ
ㅤ┃❏ㅤ${usedPrefix}ᴋᴜʀᴜᴍɪ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴀᴅᴀʀᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴍɪᴋᴀsᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴍɪᴋᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴍɪɴᴀᴛᴏ
ㅤ┃❏ㅤ${usedPrefix}ɴᴀʀᴜᴛᴏ
ㅤ┃❏ㅤ${usedPrefix}ɴᴇᴢᴜᴋᴏ
ㅤ┃❏ㅤ${usedPrefix}sᴀɢɪʀɪ
ㅤ┃❏ㅤ${usedPrefix}sᴀsᴜᴋᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴀᴋᴜʀᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴍᴠ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀɪғᴜ
ㅤ┃❏ㅤ${usedPrefix}ɴᴇᴋᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴢᴇʀᴏᴛᴡᴏ
ㅤ┃❏ㅤ${usedPrefix}ʟᴏʟɪ
ㅤ┃❏ㅤ${usedPrefix}ᴊᴊᴀɴɪᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴘᴏᴋᴇᴅᴇx
ㅤ┃❏ㅤ${usedPrefix}ᴛʀᴀᴄᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙋𝙞𝙘
ㅤ┃❏ㅤ${usedPrefix}ᴍᴇssɪ
ㅤ┃❏ㅤ${usedPrefix}ᴄʀ7
ㅤ┃❏ㅤ${usedPrefix}ᴘᴘᴄᴏᴜᴘʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴘᴘᴄᴘ
ㅤ┃❏ㅤ${usedPrefix}ᴘɪɴᴛᴇʀᴇsᴛ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙊𝙬𝙣𝙚𝙧
ㅤ┃❏ㅤ${usedPrefix}ʟᴇᴀᴠᴇɢᴄ
ㅤ┃❏ㅤ${usedPrefix}ᴏᴜᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴇᴛᴇᴄʜᴀᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴘɪɴ
ㅤ┃❏ㅤ${usedPrefix}ᴜɴᴘɪɴ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴅᴅᴘʀᴇᴍ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴅᴅᴏᴡɴᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ᴀʟʟᴏᴡ
ㅤ┃❏ㅤ${usedPrefix}ʜᴇʀᴏᴋᴜ
ㅤ┃❏ㅤ${usedPrefix}ʙᴀɴ
ㅤ┃❏ㅤ${usedPrefix}ʙᴀɴᴄʜᴀᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴛx
ㅤ┃❏ㅤ${usedPrefix}ʙʀᴏᴀᴅᴄᴀsᴛɢʀᴏᴜᴘ
ㅤ┃❏ㅤ${usedPrefix}ʙᴄɢᴄ
ㅤ┃❏ㅤ${usedPrefix}ᴄʟᴇᴀʀᴛᴍᴘ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴇxᴘɪʀᴇᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴘʀᴇᴍ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇᴍᴏᴠᴇᴏᴡɴᴇʀ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛᴘᴘʙᴏᴛғᴜʟʟ
ㅤ┃❏ㅤ${usedPrefix}ɢᴇᴛᴘʟᴜɢɪɴ
ㅤ┃❏ㅤ${usedPrefix}ɢᴇᴛғɪʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴊᴏɪɴ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇsᴇᴛ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇsᴇᴛᴘʀᴇғɪx
ㅤ┃❏ㅤ${usedPrefix}ʀᴇsᴛᴀʀᴛ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛᴘʀᴇғɪx
ㅤ┃❏ㅤ${usedPrefix}ᴜɴʙᴀɴ
ㅤ┃❏ㅤ${usedPrefix}ᴜɴʙᴀɴᴄʜᴀᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴜᴘᴅᴀᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏɴғɪɢ
ㅤ┃❏ㅤ${usedPrefix}ʟɪsᴛʙᴀɴ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴇᴛᴇᴘʟᴜɢɪɴ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙁𝙪𝙣
ㅤ┃❏ㅤ${usedPrefix}ᴀғᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴍᴘ3
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴀᴠ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏxɪᴄɪᴛʏ
ㅤ┃❏ㅤ${usedPrefix}ʙᴏᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴀʀᴀᴄᴛᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴀʀᴇ
ㅤ┃❏ㅤ${usedPrefix}ғʟɪʀᴛ
ㅤ┃❏ㅤ${usedPrefix}ɢᴀʏ
ㅤ┃❏ㅤ${usedPrefix}ᴊᴏᴋᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴘɪᴄᴋᴜᴘʟɪɴᴇ
ㅤ┃❏ㅤ${usedPrefix}ǫᴜᴇsᴛɪᴏɴ
ㅤ┃❏ㅤ${usedPrefix}sʜᴀʏᴀʀɪ
ㅤ┃❏ㅤ${usedPrefix}sʜɪᴘ
ㅤ┃❏ㅤ${usedPrefix}ʏᴏᴍᴀᴍᴀᴊᴏᴋᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴛʀᴜᴛʜ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀsᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴘᴇʀᴠ
ㅤ┃❏ㅤ${usedPrefix}ʜᴀɴᴅsᴏᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ʜᴏᴛ
ㅤ┃❏ㅤ${usedPrefix}sᴇxʏ
ㅤ┃❏ㅤ${usedPrefix}ᴜɢʟʏ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴜᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴀʏʙᴏʏ
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴀʏɢɪʀʟ
ㅤ┃❏ㅤ${usedPrefix}ʙᴇᴀᴜᴛʏғᴜʟ
ㅤ┃❏ㅤ${usedPrefix}ʟᴇsʙɪᴀɴ
ㅤ┃❏ㅤ${usedPrefix}ᴡʜᴏʀᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴏᴛʜᴇʀғᴜᴄᴋᴇʀ
ㅤ┃❏ㅤ${usedPrefix}sᴜᴄᴋᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ʜᴏʀɴʏ
ㅤ┃❏ㅤ${usedPrefix}ғᴏᴏʟɪsʜ
ㅤ┃❏ㅤ${usedPrefix}ɴɪʙʙᴀ
ㅤ┃❏ㅤ${usedPrefix}ɴɪʙʙɪ
ㅤ┃❏ㅤ${usedPrefix}ʙɪᴛᴄʜ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀɪғᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴄʀᴀᴄᴋʜᴇᴀᴅ
ㅤ┃❏ㅤ${usedPrefix}ʀᴀsᴄᴀʟ
ㅤ┃❏ㅤ${usedPrefix}ɪᴅɪᴏᴛ
ㅤ┃❏ㅤ${usedPrefix}ɢɪʀʟʏʙᴏʏ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴍʙᴏʏ
ㅤ┃❏ㅤ${usedPrefix}ɢɪɢᴀᴄʜᴀᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴍғ
ㅤ┃❏ㅤ${usedPrefix}ɪɴᴛʀᴏᴠᴇʀᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴇxᴛʀᴏᴠᴇʀᴛ
ㅤ┃❏ㅤ${usedPrefix}sɪɢᴍᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴘsʏᴄʜᴏ
ㅤ┃❏ㅤ${usedPrefix}ʙʀᴀɪɴʟᴇss
ㅤ┃❏ㅤ${usedPrefix}ᴜsᴇʟᴇss
ㅤ┃❏ㅤ${usedPrefix}sɪɴɢᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ɪᴍᴀɢᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴇᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ǫᴜᴏᴛᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

┌─☛『 *_reaction_* 』☚
┃❏${usedPrefix}bully @tag
┃❏${usedPrefix}cuddle @tag
┃❏${usedPrefix}cry @tag
┃❏${usedPrefix}hug @tag
┃❏${usedPrefix}awoo @tag
┃❏${usedPrefix}kiss @tag
┃❏${usedPrefix}lick @tag
┃❏${usedPrefix}pat @tag
┃❏${usedPrefix}smug @tag
┃❏${usedPrefix}bonk @tag
┃❏${usedPrefix}yeet @tag
┃❏${usedPrefix}blush @tag
┃❏${usedPrefix}smile @tag
┃❏${usedPrefix}wave @tag
┃❏${usedPrefix}highfive @tag
┃❏${usedPrefix}handhold @tag
┃❏${usedPrefix}nom @tag
┃❏${usedPrefix}bite @tag
┃❏${usedPrefix}glomp @tag
┃❏${usedPrefix}slap @tag
┃❏${usedPrefix}kill @tag
┃❏${usedPrefix}happy @tag
┃❏${usedPrefix}wink @tag
┃❏${usedPrefix}poke @tag
┃❏${usedPrefix}dance @tag
┃❏${usedPrefix}cringe @tag
╰─────────────────➢
┌─☛『 *_utility_* 』☚
┃❏${usedPrefix}bmi
┃❏${usedPrefix}crypto
┃❏${usedPrefix}currency
┃❏${usedPrefix}countdown
┃❏${usedPrefix}prayertime
┃❏${usedPrefix}convert
╰─────────────────➢
┌─☛『 *_main_* 』☚
┃❏${usedPrefix}channel
┃❏${usedPrefix}database
┃❏${usedPrefix}user
┃❏${usedPrefix}gpguru
┃❏${usedPrefix}alive
┃❏${usedPrefix}blocklist
┃❏${usedPrefix}info
┃❏${usedPrefix}owner
┃❏${usedPrefix}totalfeature
┃❏${usedPrefix}hack
┃❏${usedPrefix}list
┃❏${usedPrefix}botmenu
┃❏${usedPrefix}ownermenu
┃❏${usedPrefix}groupmenu
┃❏${usedPrefix}dlmenu
┃❏${usedPrefix}downloadermenu
┃❏${usedPrefix}economymenu
┃❏${usedPrefix}funmenu
┃❏${usedPrefix}gamemenu
┃❏${usedPrefix}stickermenu
┃❏${usedPrefix}nsfwmenu
┃❏${usedPrefix}logomenu
┃❏${usedPrefix}toolmenu
┃❏${usedPrefix}animemenu2
┃❏${usedPrefix}animemenu
┃❏${usedPrefix}listprem
┃❏${usedPrefix}logomenu2
┃❏${usedPrefix}ping
┃❏${usedPrefix}ping2
┃❏${usedPrefix}runtime
┃❏${usedPrefix}script
┃❏${usedPrefix}server
┃❏${usedPrefix}system
┃❏${usedPrefix}blocklist
┃❏${usedPrefix}setprivacy
┃❏${usedPrefix}allmenu
╰─────────────────➢
┌─☛『 *_cmd_* 』☚
┃❏${usedPrefix}delcmd <text>
┃❏${usedPrefix}listcmd
┃❏${usedPrefix}setcmd <txt>
╰─────────────────➢
┌─☛『 *_information_* 』☚
┃❏${usedPrefix}cninfo
┃❏${usedPrefix}fact
╰─────────────────➢
┌─☛『 *_finance_* 』☚
┃❏${usedPrefix}crypto
╰─────────────────➢
┌─☛『 *_cryptocurrency_* 』☚
┃❏${usedPrefix}crypto
╰─────────────────➢
┌─☛『 *_time_* 』☚
┃❏${usedPrefix}countdown
╰─────────────────➢
┌─☛『 *_downloader_* 』☚
┃❏${usedPrefix}facebook <url>
┃❏${usedPrefix}gdrive 🅟
┃❏${usedPrefix}gitclone <url>
┃❏${usedPrefix}igstalk
┃❏${usedPrefix}instagram
┃❏${usedPrefix}mediafire <url>
┃❏${usedPrefix}mega
┃❏${usedPrefix}modapk
┃❏${usedPrefix}play <query>
┃❏${usedPrefix}play2 <text>
┃❏${usedPrefix}playvid <text>
┃❏${usedPrefix}play3  Ⓛ
┃❏${usedPrefix}tiktok <url>
┃❏${usedPrefix}tiktokstalk
┃❏${usedPrefix}twitter <url>
┃❏${usedPrefix}ytmp3 <url>
┃❏${usedPrefix}ytsearch
┃❏${usedPrefix}ytmp4 <yt-link>
┃❏${usedPrefix}wallpaper <query>
┃❏${usedPrefix}play  Ⓛ
┃❏${usedPrefix}play  Ⓛ
╰─────────────────➢
┌─☛『 *_premium_* 』☚
┃❏${usedPrefix}gdrive 🅟
┃❏${usedPrefix}mediafire <url>
╰─────────────────➢
┌─☛『 *_economy_* 』☚
┃❏${usedPrefix}addgold <@user>
┃❏${usedPrefix}addxp <@user>
┃❏${usedPrefix}bank
┃❏${usedPrefix}buych
┃❏${usedPrefix}cock-fight <amount>
┃❏${usedPrefix}buy
┃❏${usedPrefix}buyall
┃❏${usedPrefix}daily
┃❏${usedPrefix}deposit
┃❏${usedPrefix}gamble <amount> <color(red/black)>
┃❏${usedPrefix}give credit [amount] [@tag]
┃❏${usedPrefix}levelup
┃❏${usedPrefix}rank
┃❏${usedPrefix}rob
┃❏${usedPrefix}roulette <amount> <color(red/black)>
┃❏${usedPrefix}wallet
┃❏${usedPrefix}withdraw
┃❏${usedPrefix}work
╰─────────────────➢
┌─❖『 *_core_* 』❖
┃❏${usedPrefix}leaderboard
╰─────────────────➢
┌─☛『 *_game_* 』☚
┃❏${usedPrefix}slot <amount>
┃❏${usedPrefix}chess [from to]
┃❏${usedPrefix}chess delete
┃❏${usedPrefix}chess join
┃❏${usedPrefix}chess start
┃❏${usedPrefix}delttt
┃❏${usedPrefix}guessflag
┃❏${usedPrefix}Maths <modes>
┃❏${usedPrefix}ppt <rock/paper/scissors>
┃❏${usedPrefix}tictactoe <tag number>
╰─────────────────➢
┌─☛『 *_config_* 』☚
┃❏${usedPrefix}enable <option>
┃❏${usedPrefix}disable <option>
╰─────────────────➢
┌─☛『 *_internet_* 』☚
┃❏${usedPrefix}google <search>
┃❏${usedPrefix}s <search>
╰─────────────────➢
┌─☛『 *_maker_* 』☚
┃❏${usedPrefix}blur
┃❏${usedPrefix}difuminar2
┃❏${usedPrefix}hornycard
┃❏${usedPrefix}hornylicense
┃❏${usedPrefix}gfx1
┃❏${usedPrefix}gfx2
┃❏${usedPrefix}gfx3
┃❏${usedPrefix}gfx4
┃❏${usedPrefix}gfx5
┃❏${usedPrefix}gfx6
┃❏${usedPrefix}gfx7
┃❏${usedPrefix}gfx8
┃❏${usedPrefix}gfx9
┃❏${usedPrefix}gfx10
┃❏${usedPrefix}gfx11
┃❏${usedPrefix}gfx12
┃❏${usedPrefix}simpcard
┃❏${usedPrefix}itssostupid
┃❏${usedPrefix}iss
┃❏${usedPrefix}stupid
┃❏${usedPrefix}tweet <comment>
┃❏${usedPrefix}lolicon
┃❏${usedPrefix}quozio
┃❏${usedPrefix}qmkr
┃❏${usedPrefix}ytcomment <comment>
╰─────────────────➢
┌─☛『 *_nsfw_* 』☚
┃❏${usedPrefix}nsfw
╰─────────────────❖
┌─☛『 *_advanced_* 』☚
┃❏$
╰─────────────────➢
┌─☛『 *_plugin_*  』☚
┃❏${usedPrefix}plugins
┃❏${usedPrefix}install <Gist URL>
╰─────────────────➢
┌─☛『 *_rg_* 』☚
┃❏${usedPrefix}reg <name.age>
┃❏${usedPrefix}mysn
┃❏${usedPrefix}unreg <Num Serie>
╰─────────────────➢
┌─☛『 *_sticker_* 』☚
┃❏${usedPrefix}emojimix <emoji+emoji>
┃❏${usedPrefix}getsticker
┃❏${usedPrefix}smaker
┃❏${usedPrefix}stickerwithmeme (caption|reply media)
┃❏${usedPrefix}swmeme <url>
┃❏${usedPrefix}swm(caption|reply media)
┃❏${usedPrefix}sfull
┃❏${usedPrefix}toimg <sticker>
┃❏${usedPrefix}tovid
┃❏${usedPrefix}trigger <@user>
┃❏${usedPrefix}ttp
┃❏${usedPrefix}ttp2
┃❏${usedPrefix}ttp3
┃❏${usedPrefix}ttp4
┃❏${usedPrefix}ttp5
┃❏${usedPrefix}attp
┃❏${usedPrefix}attp2
┃❏${usedPrefix}attp3
┃❏${usedPrefix}take <name>|<author>
╰─────────────────➢
┌─↘☛『 *_audio_* 』☚
┃❏${usedPrefix}bass [vn]
┃❏${usedPrefix}blown [vn]
┃❏${usedPrefix}deep [vn]
┃❏${usedPrefix}earrape [vn]
┃❏${usedPrefix}fast [vn]
┃❏${usedPrefix}fat [vn]
┃❏${usedPrefix}nightcore [vn]
┃❏${usedPrefix}reverse [vn]
┃❏${usedPrefix}robot [vn]
┃❏${usedPrefix}slow [vn]
┃❏${usedPrefix}smooth [vn]
┃❏${usedPrefix}tupai [vn]
╰─────────────────➢
┌─☛『 *_news_* 』☚
┃❏${usedPrefix}news
┃❏${usedPrefix}technews
╰─────────────────➢
┌─➢『 *_conversion_* 』❖
┃❏${usedPrefix}convert
╰─────────────────➢
XLICON-𝙼𝙳-𝚅𝟸 𝙱𝚈 AB AND SALMAN`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu1', 'imenu'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
      "I'm not lazy, I'm just on my energy saving mode.",
      "Life is short, smile while you still have teeth.",
      "I may be a bad influence, but darn I am fun!",
      "I'm on a whiskey diet. I've lost three days already.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "I told my wife she should embrace her mistakes... She gave me a hug.",
      "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
      "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
      "I'm so good at sleeping, I can do it with my eyes closed.",
      "If you think nobody cares if you’re alive, try missing a couple of payments.",
      "I used to think I was indecisive, but now I'm not so sure.",
      "If you can't convince them, confuse them.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I'm not clumsy, I'm just on a mission to test gravity.",
      "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
      "Life is like a box of chocolates; it doesn't last long if you're hungry.",
      "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "Why do they call it beauty sleep when you wake up looking like a troll?",
      "I don't always lose my phone, but when I do, it's always on silent.",
      "My bed is a magical place where I suddenly remember everything I was supposed to do.",
      "I love the sound you make when you shut up.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "I'm not a complete idiot, some parts are missing.",
      "When life gives you lemons, squirt someone in the eye.",
      "I don't need anger management. You just need to stop making me angry.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "The early bird can have the worm because worms are gross and mornings are stupid.",
      "If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!",
      "The road to success is always under construction.",
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
      "Some people just need a high-five. In the face. With a chair.",
      "I'm not saying I'm perfect, but I'm pretty close.",
      "A day without sunshine is like, you know, night.",
      "The best way to predict the future is to create it.",
      "If you can't be a good example, then you'll just have to be a horrible warning.",
      "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
      "I'm not lazy. I'm on energy-saving mode.",
      "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
      "I don't have a bad handwriting, I have my own font.",
      "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "😒rest people",
      "🥰you know you shouldnt use a bot too much",
      "🤣why are you using me 😅।",
      "😇।",
      "🤐।",
      "🔰",
      "rest😒 you are using me too much।"
];
