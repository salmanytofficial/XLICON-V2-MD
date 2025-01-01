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
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
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

  ཌ|━━🤖 _BOT STATUS:_🤖━━|ད
  ⚀------- *IPHONE-MENU* ------⚀

┌─𐂅  *MADE BY XLICON*  𐂅
| ❁✓  *Creator:* XLICON-TEAM
| 🤖  *Bot Name:* XLICON-V2
| 💻  *Host:* Linux 🟩
| 📣  *Prefix:* ${usedPrefix} 
| 🕓  *Uptime:* ${uptime}
| 💌  *Database:* ${rtotalreg} of ${totaluser} 
| 📚  *Total Users:* ${totaluser} 
╰───────────────▶

┌─☠︎︎「⏰ *_Today's Sauce!_* ⏰」
| 📆  *Today's Date:* ${date} 
| ⏲️  *Current Time:* ${wib} 
╰───────────────▶

┌─𐂅「 *👤USER* 」
| 👾  *User Tag:* ${taguser} 
| 😇  *Name:* ${name} 
| ✰  *Master Mind:* AB - TECH
| 💎  *Diamonds:* -9999
| 🏆  *Rank:* ${role}
| 🎮  *XP:* ${exp} 
╰───────────────▶

 
┌─☛『 *_Fellowship_* 』☚
┃❏${usedPrefix}bible [chapter_number|chapter_name]
❏${usedPrefix}quran [surah_number|surah_name]
╰─────────────────➢
┌─☛『 *_AI_* 』☚
┃❏${usedPrefix}bingimg2
┃❏${usedPrefix}chatgpt
┃❏${usedPrefix}aisearch
┃❏${usedPrefix}toanime
┃❏${usedPrefix}gitagpt
┃❏${usedPrefix}chat
┃❏${usedPrefix}blackbox
┃❏${usedPrefix}bingimg <query>
┃❏${usedPrefix}tocartoon
┃❏${usedPrefix}dalle
╰─────────────────➢
┌─☛『 *_image_* 』☚
┃❏${usedPrefix}blackpink
╰─────────────────➢
┌─☛『 *_tools_* 』☚
┃❏${usedPrefix}gemini <text>
┃❏${usedPrefix}nowa
┃❏${usedPrefix}qr <text>
┃❏${usedPrefix}qrcode <text>
┃❏${usedPrefix}weather ${usedPrefix}<place>
┃❏${usedPrefix}shortlink <longLink>
┃❏${usedPrefix}bitly <longlink>
┃❏${usedPrefix}dehaze
┃❏${usedPrefix}recolor
┃❏${usedPrefix}hdr
┃❏${usedPrefix}get
┃❏${usedPrefix}length <amount>
┃❏${usedPrefix}tinyurl <link>
┃❏${usedPrefix}shorten <link>
┃❏${usedPrefix}tempmail
┃❏${usedPrefix}shazam
┃❏${usedPrefix}cal <equation>
┃❏${usedPrefix}.carbon <code>
┃❏${usedPrefix}define <word>
┃❏${usedPrefix}element
┃❏${usedPrefix}itunes
┃❏${usedPrefix}lyrics
┃❏${usedPrefix}imdb
┃❏${usedPrefix}course
┃❏${usedPrefix}randomcourse
┃❏${usedPrefix}readmore <text1>|<text2>
┃❏${usedPrefix}readvo
┃❏${usedPrefix}removebg
┃❏${usedPrefix}ss <url>
┃❏${usedPrefix}ssf <url>
┃❏${usedPrefix}style <key> <text>
┃❏${usedPrefix}subreddit
┃❏${usedPrefix}telesticker  Ⓛ
┃❏${usedPrefix}tourl
┃❏${usedPrefix}translate <lang> <text>
┃❏${usedPrefix}tts <lang> <task>
┃❏${usedPrefix}wa
┃❏${usedPrefix}wikipedia
┃❏${usedPrefix}true
┃❏${usedPrefix}findmusic
┃❏${usedPrefix}githubstalk <query>
╰─────────────────➢
┌─☛『 *_group_* 』☚
┃❏${usedPrefix}getbio <@tag/reply>  Ⓛ
┃❏${usedPrefix}animequote
┃❏${usedPrefix}Setdesc <text>
┃❏${usedPrefix}setname <text>
┃❏${usedPrefix}add
┃❏${usedPrefix}delete
┃❏${usedPrefix}delwarn @user
┃❏${usedPrefix}demote (@tag)
┃❏${usedPrefix}infogp
┃❏${usedPrefix}hidetag
┃❏${usedPrefix}invite <917xxx>
┃❏${usedPrefix}kick @user
┃❏${usedPrefix}link
┃❏${usedPrefix}poll question|option|option
┃❏${usedPrefix}profile
┃❏${usedPrefix}promote
┃❏${usedPrefix}resetlink
┃❏${usedPrefix}setbye <text>
┃❏${usedPrefix}group ${usedPrefix}open/close*
┃❏${usedPrefix}setwelcome <text>
┃❏${usedPrefix}simulate <event> @user
┃❏${usedPrefix}staff
┃❏${usedPrefix}tagall
┃❏${usedPrefix}totag
┃❏${usedPrefix}warn @user
┃❏${usedPrefix}warns
╰─────────────────➢
┌─☛『 *_anime_* 』☚
┃❏${usedPrefix}anime
┃❏${usedPrefix}akira
┃❏${usedPrefix}akiyama
┃❏${usedPrefix}anna
┃❏${usedPrefix}asuna
┃❏${usedPrefix}ayuzawa
┃❏${usedPrefix}boruto
┃❏${usedPrefix}chiho
┃❏${usedPrefix}chitoge
┃❏${usedPrefix}deidara
┃❏${usedPrefix}erza
┃❏${usedPrefix}elaina
┃❏${usedPrefix}eba
┃❏${usedPrefix}emilia
┃❏${usedPrefix}hestia
┃❏${usedPrefix}hinata
┃❏${usedPrefix}inori
┃❏${usedPrefix}isuzu
┃❏${usedPrefix}itachi
┃❏${usedPrefix}itori
┃❏${usedPrefix}kaga
┃❏${usedPrefix}kagura
┃❏${usedPrefix}kaori
┃❏${usedPrefix}keneki
┃❏${usedPrefix}kotori
┃❏${usedPrefix}kurumi
┃❏${usedPrefix}madara
┃❏${usedPrefix}mikasa
┃❏${usedPrefix}miku
┃❏${usedPrefix}minato
┃❏${usedPrefix}naruto
┃❏${usedPrefix}nezuko
┃❏${usedPrefix}sagiri
┃❏${usedPrefix}sasuke
┃❏${usedPrefix}sakura
┃❏${usedPrefix}akira
┃❏${usedPrefix}amv  Ⓛ
┃❏${usedPrefix}waifu
┃❏${usedPrefix}neko
┃❏${usedPrefix}zerotwo
┃❏${usedPrefix}loli
┃❏${usedPrefix}jjanime  Ⓛ
┃❏${usedPrefix}pokedex <pokemon>
┃❏${usedPrefix}trace
╰─────────────────➢
┌─☛『 *_img_* 』☚
┃❏${usedPrefix}messi
┃❏${usedPrefix}cristianoronaldo
┃❏${usedPrefix}cr7
┃❏${usedPrefix}ppcouple
┃❏${usedPrefix}ppcp
┃❏${usedPrefix}pinterest
╰─────────────────➢
┌─☛『 *_owner_* 』☚
┃❏${usedPrefix}leavegc
┃❏${usedPrefix}out
┃❏${usedPrefix}deletechat
┃❏${usedPrefix}pin
┃❏${usedPrefix}unpin
┃❏${usedPrefix}deletechat
┃❏${usedPrefix}addprem <@tag>
┃❏${usedPrefix}addowner @user
┃❏${usedPrefix}allow <@tag>
┃❏${usedPrefix}HEROKU
┃❏${usedPrefix}ban @user
┃❏${usedPrefix}banchat
┃❏${usedPrefix}tx
┃❏${usedPrefix}broadcastgroup <text>
┃❏${usedPrefix}bcgc <text>
┃❏${usedPrefix}cleartmp
┃❏${usedPrefix}delexpired
┃❏${usedPrefix}delprem @user
┃❏${usedPrefix}removeowner @user
┃❏${usedPrefix}setppbotfull
┃❏${usedPrefix}getplugin <name file>
┃❏${usedPrefix}getfile <name file>
┃❏${usedPrefix}join <chat.whatsapp.com> <dias>
┃❏${usedPrefix}reset <54xxx>
┃❏${usedPrefix}resetprefix
┃❏${usedPrefix}restart
┃❏${usedPrefix}.setprefix
┃❏${usedPrefix}.setprefix [symbol]
┃❏${usedPrefix}unban @user
┃❏${usedPrefix}unbanchat
┃❏${usedPrefix}update
┃❏${usedPrefix}update now
┃❏${usedPrefix}config
┃❏${usedPrefix}listban
┃❏${usedPrefix}deleteplugin <name>
╰─────────────────➢
┌─☛『 *_fun_* 』☚
┃❏${usedPrefix}afk <reason>
┃❏${usedPrefix}tomp3
┃❏${usedPrefix}toav
┃❏${usedPrefix}toxicity
┃❏${usedPrefix}bot
┃❏${usedPrefix}character @tag
┃❏${usedPrefix}dare
┃❏${usedPrefix}flirt
┃❏${usedPrefix}gay @user
┃❏${usedPrefix}joke
┃❏${usedPrefix}pickupline
┃❏${usedPrefix}question
┃❏${usedPrefix}shayari
┃❏${usedPrefix}ship
┃❏${usedPrefix}yomamajoke
┃❏${usedPrefix}truth
┃❏${usedPrefix}waste @user
┃❏${usedPrefix}perv
┃❏${usedPrefix}handsome
┃❏${usedPrefix}hot
┃❏${usedPrefix}sexy
┃❏${usedPrefix}ugly
┃❏${usedPrefix}cute
┃❏${usedPrefix}playboy
┃❏${usedPrefix}playgirl
┃❏${usedPrefix}beautiful
┃❏${usedPrefix}lesbian
┃❏${usedPrefix}whore
┃❏${usedPrefix}motherfucker
┃❏${usedPrefix}sucker
┃❏${usedPrefix}horny
┃❏${usedPrefix}foolish
┃❏${usedPrefix}nibba
┃❏${usedPrefix}nibbi
┃❏${usedPrefix}bitch
┃❏${usedPrefix}waifu
┃❏${usedPrefix}crackhead
┃❏${usedPrefix}rascal
┃❏${usedPrefix}idiot
┃❏${usedPrefix}girlyboy
┃❏${usedPrefix}tomboy
┃❏${usedPrefix}gigachad
┃❏${usedPrefix}mf
┃❏${usedPrefix}introvert
┃❏${usedPrefix}extrovert
┃❏${usedPrefix}sigma
┃❏${usedPrefix}psycho
┃❏${usedPrefix}brainless
┃❏${usedPrefix}useless
┃❏${usedPrefix}singer
┃❏${usedPrefix}image
┃❏${usedPrefix}meme
┃❏${usedPrefix}quote
╰─────────────────➢
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
