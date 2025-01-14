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

ㅤㅤㅤㅤㅤ   ㅤ𒅒 𝗜𝗠𝗘𝗡𝗨 ᳄ 𝗜𝗚𝗚𝗔 

ㅤ┌─𒀱ꪳ  𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙓𝙇𝙄𝘾𝙊𝙉 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ
ㅤ┃ ⚙️  *ʙᴏᴛ*       𝗫𝗹𝗶𝗰𝗼𝗻𝗩2
ㅤ┃ 💻  *ʜᴏsᴛ*      𝗟𝗶𝗻𝘂𝘅
ㅤ┃      *ᴘʀᴇғɪx*    ${usedPrefix} 
ㅤ┃      *ʀᴜɴᴛɪᴍᴇ*   ${uptime}
ㅤ┃      *ᴅᴀᴛᴀʙᴀsᴇ*  ${rtotalreg} of ${totaluser} 
ㅤ┃      *ᴜsᴇʀs*     ${totaluser} 
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙋𝙧𝙚𝙨𝙚𝙣𝙩
ㅤ┃    *ᴅᴀᴛᴇ* ${date} 
ㅤ┃    *ᴛɪᴍᴇ* ${wib} 
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙐𝙨𝙚𝙧 
ㅤ┃     *ɴᴀᴍᴇ*   ${taguser} 
ㅤ┃     *ɴᴀᴍᴇ*   ${username}
ㅤ┃     *ɢᴇᴍs*   -ɪɴғɪɴɪᴛᴇ
ㅤ┃     *ʀᴀɴᴋ*   ${role}
ㅤ┃     *ᴇxᴘ*    ${exp} 
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤㅤㅤㅤㅤ ㅤㅤ     ㅤ𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨

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
ㅤ┃❏ ${usedPrefix}ʙʟᴀᴄᴋᴘɪɴᴋ
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

ㅤ┌─𒀱ꪳ  𝘼𝙘𝙩𝙞𝙤𝙣𝙨
ㅤ┃❏ㅤ${usedPrefix}ʙᴜʟʟʏ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴜᴅᴅʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴄʀʏ
ㅤ┃❏ㅤ${usedPrefix}ʜᴜɢ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴡᴏᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴋɪss
ㅤ┃❏ㅤ${usedPrefix}ʟɪᴄᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴘᴀᴛ
ㅤ┃❏ㅤ${usedPrefix}sᴍᴜɢ
ㅤ┃❏ㅤ${usedPrefix}ʙᴏɴᴋ
ㅤ┃❏ㅤ${usedPrefix}ʏᴇᴇᴛ
ㅤ┃❏ㅤ${usedPrefix}ʙʟᴜsʜ
ㅤ┃❏ㅤ${usedPrefix}sᴍɪʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀᴠᴇ
ㅤ┃❏ㅤ${usedPrefix}ʜɪɢʜғɪᴠᴇ
ㅤ┃❏ㅤ${usedPrefix}ʜᴀɴᴅʜᴏʟᴅ
ㅤ┃❏ㅤ${usedPrefix}ɴᴏᴍ
ㅤ┃❏ㅤ${usedPrefix}ʙɪᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ɢʟᴏᴍᴘ
ㅤ┃❏ㅤ${usedPrefix}sʟᴀᴘ
ㅤ┃❏ㅤ${usedPrefix}ᴋɪʟʟ
ㅤ┃❏ㅤ${usedPrefix}ʜᴀᴘᴘʏ
ㅤ┃❏ㅤ${usedPrefix}ᴡɪɴᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴘᴏᴋᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴀɴᴄᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴄʀɪɴɢᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙐𝙩𝙞𝙡𝙞𝙩𝙞𝙚𝙨
ㅤ┃❏ㅤ${usedPrefix}ʙᴍɪ
ㅤ┃❏ㅤ${usedPrefix}ᴄʀʏᴘᴛᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴜʀʀᴇɴᴄʏ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏᴜɴᴛᴅᴏᴡɴ
ㅤ┃❏ㅤ${usedPrefix}ᴘʀᴀʏᴇʀᴛɪᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏɴᴠᴇʀᴛ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙈𝙖𝙞𝙣
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴀɴɴᴇʟ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴀᴛᴀʙᴀsᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴜsᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ɢᴘɢᴜʀᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴀʟɪᴠᴇ
ㅤ┃❏ㅤ${usedPrefix}ʙʟᴏᴄᴋʟɪsᴛ
ㅤ┃❏ㅤ${usedPrefix}ɪɴғᴏ
ㅤ┃❏ㅤ${usedPrefix}ᴏᴡɴᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴛᴀʟғᴇᴀᴛᴜʀᴇ
ㅤ┃❏ㅤ${usedPrefix}ʜᴀᴄᴋ
ㅤ┃❏ㅤ${usedPrefix}ʟɪsᴛ
ㅤ┃❏ㅤ${usedPrefix}ʙᴏᴛᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴏᴡɴᴇʀᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ɢʀᴏᴜᴘᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴅʟᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴇᴄᴏɴᴏᴍʏᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ғᴜɴᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ɢᴀᴍᴇᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ɴsғᴡᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ʟᴏɢᴏᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴏʟᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ᴀɴɪᴍᴇᴍᴇɴᴜ2
ㅤ┃❏ㅤ${usedPrefix}ᴀɴɪᴍᴇᴍᴇɴᴜ
ㅤ┃❏ㅤ${usedPrefix}ʟɪsᴛᴘʀᴇᴍ
ㅤ┃❏ㅤ${usedPrefix}ʟᴏɢᴏᴍᴇɴᴜ2
ㅤ┃❏ㅤ${usedPrefix}ᴘɪɴɢ
ㅤ┃❏ㅤ${usedPrefix}ᴘɪɴɢ2
ㅤ┃❏ㅤ${usedPrefix}ʀᴜɴᴛɪᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴄʀɪᴘᴛ
ㅤ┃❏ㅤ${usedPrefix}sᴇʀᴠᴇʀ
ㅤ┃❏ㅤ${usedPrefix}sʏsᴛᴇᴍ
ㅤ┃❏ㅤ${usedPrefix}ʙᴏᴄᴋʟɪsᴛ
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛᴘʀɪᴠᴀᴄʏ
ㅤ┃❏ㅤ${usedPrefix}ᴀʟʟᴍᴇɴᴜ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘾𝙈𝘿
ㅤ┃❏ㅤ${usedPrefix}sᴇᴛᴄᴍᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴄᴍᴅ
ㅤ┃❏ㅤ${usedPrefix}ʟɪsᴛᴄᴍᴅ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙄𝙣𝙛𝙤
ㅤ┃❏ㅤ${usedPrefix}ᴄɴɪɴғᴏ
ㅤ┃❏ㅤ${usedPrefix}ғᴀᴄᴛ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙁𝙞𝙣𝙖𝙣𝙘𝙚
ㅤ┃❏ㅤ${usedPrefix}ᴄʀʏᴘᴛᴏ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘾𝙧𝙮𝙥𝙩𝙤𝙘𝙪𝙧𝙧𝙚𝙣𝙘𝙮
ㅤ┃❏ㅤ${usedPrefix}ᴄʀʏᴘᴛᴏ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙏𝙞𝙢𝙚
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏᴜɴᴛᴅᴏᴡɴ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧𝙨
ㅤ┃❏ㅤ${usedPrefix}ғᴀᴄᴇʙᴏᴏᴋ
ㅤ┃❏ㅤ${usedPrefix}ɢɪᴛᴄʟᴏɴᴇ
ㅤ┃❏ㅤ${usedPrefix}ɪɢsᴛᴀʟᴋ
ㅤ┃❏ㅤ${usedPrefix}ɪɴsᴛᴀɢʀᴀᴍ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴇɢᴀ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴏᴅᴀᴘᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴀʏ
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴀʏ2
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴀʏ3
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴀʏᴠɪᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴛɪᴋᴛᴏᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴡɪᴛᴛᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ʏᴛᴍᴘ3
ㅤ┃❏ㅤ${usedPrefix}ʏᴛsᴇᴀʀᴄʜ
ㅤ┃❏ㅤ${usedPrefix}ʏᴛᴍᴘ4
ㅤ┃❏ㅤ${usedPrefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙋𝙧𝙚𝙢𝙞𝙪𝙢
ㅤ┃❏ㅤ${usedPrefix}ɢᴅʀɪᴠᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴇᴅɪᴀғɪʀᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙀𝙘𝙤𝙣𝙤𝙢𝙮
ㅤ┃❏ㅤ${usedPrefix}ᴀᴅᴅɢᴏʟᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴅᴅxᴘ
ㅤ┃❏ㅤ${usedPrefix}ʙᴀɴᴋ
ㅤ┃❏ㅤ${usedPrefix}ʙᴜʏᴄʜ
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏᴄᴋғɪɢʜᴛ
ㅤ┃❏ㅤ${usedPrefix}ʙᴜʏ
ㅤ┃❏ㅤ${usedPrefix}ʙᴜʏᴀʟʟ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴀɪʟʏ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇᴘᴏsɪᴛ
ㅤ┃❏ㅤ${usedPrefix}ɢᴀᴍʙʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ɢɪᴠᴇ ᴄʀᴇᴅɪᴛ
ㅤ┃❏ㅤ${usedPrefix}ʟᴇᴠᴇʟᴜᴘ
ㅤ┃❏ㅤ${usedPrefix}ʀᴀɴᴋ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘾𝙤𝙧𝙚
ㅤ┃❏ㅤ${usedPrefix}ʀᴏʙ
ㅤ┃❏ㅤ${usedPrefix}ʀᴏᴜʟʟᴇᴛᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴡʟʟᴇᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴡɪᴛʜᴅʀᴀᴡ
ㅤ┃❏ㅤ${usedPrefix}ᴡᴏʀᴋ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘾𝙤𝙧𝙚
ㅤ┃❏ㅤ${usedPrefix}ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙂𝙖𝙢𝙚𝙨
ㅤ┃❏ㅤ${usedPrefix}sʟᴏᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴇss
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴇss ᴊᴏɪɴ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴇss sᴛᴀʀᴛ
ㅤ┃❏ㅤ${usedPrefix}ᴄʜᴇss ᴅᴇʟᴇᴛᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇʟᴛᴛᴛ
ㅤ┃❏ㅤ${usedPrefix}ɢᴜᴇssғʟᴀɢ
ㅤ┃❏ㅤ${usedPrefix}ᴍᴀᴛʜs
ㅤ┃❏ㅤ${usedPrefix}ʀᴘs
ㅤ┃❏ㅤ${usedPrefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘾𝙤𝙣𝙛𝙞𝙜
ㅤ┃❏ㅤ${usedPrefix}ᴇɴᴀʙʟᴇ
ㅤ┃❏ㅤ${usedPrefix}ᴅɪsᴀʙʟᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙄𝙣𝙩𝙚𝙧𝙣𝙚𝙩
ㅤ┃❏ㅤ${usedPrefix}ɢᴏᴏɢʟᴇ
ㅤ┃❏ㅤ${usedPrefix}s
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ 𝙈𝙖𝙠𝙚𝙧
ㅤ┃❏ㅤ${usedPrefix}ʙʟᴜʀ
ㅤ┃❏ㅤ${usedPrefix}ᴅɪғᴜᴍɪɴᴀʀ2
ㅤ┃❏ㅤ${usedPrefix}ʜᴏʀɴʏᴄᴀʀᴅ
ㅤ┃❏ㅤ${usedPrefix}ʜᴏʀɴʏʟɪᴄᴇɴsᴇ
ㅤ┃❏ㅤ${usedPrefix}ɢғx1
ㅤ┃❏ㅤ${usedPrefix}ɢғx2
ㅤ┃❏ㅤ${usedPrefix}ɢғx3
ㅤ┃❏ㅤ${usedPrefix}ɢғx4
ㅤ┃❏ㅤ${usedPrefix}ɢғx5
ㅤ┃❏ㅤ${usedPrefix}ɢғx6
ㅤ┃❏ㅤ${usedPrefix}ɢғx7
ㅤ┃❏ㅤ${usedPrefix}ɢғx8
ㅤ┃❏ㅤ${usedPrefix}ɢғx9
ㅤ┃❏ㅤ${usedPrefix}ɢғx10
ㅤ┃❏ㅤ${usedPrefix}ɢғx11
ㅤ┃❏ㅤ${usedPrefix}ɢғx12
ㅤ┃❏ㅤ${usedPrefix}sɪᴍᴘᴄᴀʀᴅ
ㅤ┃❏ㅤ${usedPrefix}ɪᴛssᴏsᴛᴜᴘɪᴅ
ㅤ┃❏ㅤ${usedPrefix}ɪss
ㅤ┃❏ㅤ${usedPrefix}sᴛᴜᴘɪᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴡᴇᴇᴛ
ㅤ┃❏ㅤ${usedPrefix}ʟᴏʟɪᴄᴏɴ
ㅤ┃❏ㅤ${usedPrefix}ǫᴜᴏᴢɪᴏ
ㅤ┃❏ㅤ${usedPrefix}ǫᴍᴋʀ
ㅤ┃❏ㅤ${usedPrefix}ʏᴛᴄᴏᴍᴍᴇɴᴛ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙉𝙨𝙛𝙬
ㅤ┃❏ㅤ${usedPrefix}ɴsғᴡ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙏𝙚𝙧𝙢𝙞𝙣𝙖𝙡
ㅤ┃❏ㅤ$
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙋𝙡𝙪𝙜𝙞𝙣𝙨
ㅤ┃❏ㅤ${usedPrefix}ᴘʟᴜɢɪɴs
ㅤ┃❏ㅤ${usedPrefix}ɪɴsᴛᴀʟʟ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙍𝙚𝙜𝙞𝙨𝙩𝙚𝙧𝙖𝙩𝙞𝙤𝙣
ㅤ┃❏ㅤ${usedPrefix}ʀᴇɢ
ㅤ┃❏ㅤ${usedPrefix}ᴍʏsɴ
ㅤ┃❏ㅤ${usedPrefix}ᴜɴʀᴇɢ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙎𝙩𝙞𝙘𝙠𝙚𝙧
ㅤ┃❏ㅤ${usedPrefix}ᴇᴍᴏᴊɪᴍɪx
ㅤ┃❏ㅤ${usedPrefix}ɢᴇᴛsᴛɪᴄᴋᴇʀ
ㅤ┃❏ㅤ${usedPrefix}sᴍᴀᴋᴇʀ
ㅤ┃❏ㅤ${usedPrefix}sᴛɪᴄᴋᴇʀᴡɪᴛʜᴍᴇᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴡᴍᴇᴍᴇ
ㅤ┃❏ㅤ${usedPrefix}sᴡᴍ
ㅤ┃❏ㅤ${usedPrefix}sғᴜʟʟ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏɪᴍɢ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴏᴠɪᴅ
ㅤ┃❏ㅤ${usedPrefix}ᴛʀɪɢɢᴇʀ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴛᴘ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴛᴘ2
ㅤ┃❏ㅤ${usedPrefix}ᴛᴛᴘ3
ㅤ┃❏ㅤ${usedPrefix}ᴛᴛᴘ4
ㅤ┃❏ㅤ${usedPrefix}ᴛᴛᴘ5
ㅤ┃❏ㅤ${usedPrefix}ᴀᴛᴛᴘ
ㅤ┃❏ㅤ${usedPrefix}ᴀᴛᴛᴘ2
ㅤ┃❏ㅤ${usedPrefix}ᴀᴛᴛᴘ3
ㅤ┃❏ㅤ${usedPrefix}ᴛᴀᴋᴇ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘼𝙪𝙙𝙞𝙤
ㅤ┃❏ㅤ${usedPrefix}ʙᴀss
ㅤ┃❏ㅤ${usedPrefix}ʙʟᴏᴡɴ
ㅤ┃❏ㅤ${usedPrefix}ᴅᴇᴇᴘ
ㅤ┃❏ㅤ${usedPrefix}ᴇᴀʀʀᴀᴘᴇ
ㅤ┃❏ㅤ${usedPrefix}ғᴀsᴛ
ㅤ┃❏ㅤ${usedPrefix}ғᴀᴛ
ㅤ┃❏ㅤ${usedPrefix}ɴɪɢʜᴛᴄᴏʀᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴇᴠᴇʀsᴇ
ㅤ┃❏ㅤ${usedPrefix}ʀᴏʙᴏᴛ
ㅤ┃❏ㅤ${usedPrefix}sʟᴏᴡ
ㅤ┃❏ㅤ${usedPrefix}sᴍᴏᴏᴛʜ
ㅤ┃❏ㅤ${usedPrefix}ᴛᴜᴘᴀɪ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝙉𝙚𝙬𝙨
ㅤ┃❏ㅤ${usedPrefix}ɴᴇᴡs
ㅤ┃❏ㅤ${usedPrefix}ᴛᴇᴄʜɴᴇᴡs
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ┌─𒀱ꪳ  𝘾𝙤𝙣𝙫𝙚𝙧𝙨𝙞𝙤𝙣
ㅤ┃❏ㅤ${usedPrefix}ᴄᴏɴᴠᴇʀᴛ
ㅤ┗─══━━━━✥◈✥━━━━══┛

ㅤ © 𝘊𝘰 𝘱𝘰𝘸𝘦𝘳𝘦𝘥 𝘣𝘺 𝗪𝗛𝗜𝗧𝗘444_𝗬𝗧

`


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
