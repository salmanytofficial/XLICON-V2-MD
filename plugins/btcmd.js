import axios from 'axios';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    // Define 'result' and 'author' with static values
     let botname = 'XLICON-V2'; // Replace with your bot's name or fetch dynamically
    let mode = 'Multi-Device'; // Replace with your bot's mode or fetch dynamically
    let muptime = '10h 30m'; // Replace with your bot's uptime or fetch dynamically
    let totalreg = 500; // Replace with total registrations or fetch dynamically
    let result = ' 「 ${botname} 🎁XMD 」\n
  *%ucpn*
⍟────────────────⍟
*REMEMBER THIS BOT IS FOR*
*EDUCATIONAL PERPOSES*
⍟────────────────⍟
*©Salman Ahmand*
⍟────────────────⍟
*_Konnichiwa! Its XLICON-MD A_* 
*_Multi-Device Whatsapp BOT_*
*_Recoded By Salman Ahmad And Abraham Dwamena_*
⍟────────────────⍟
                                    
 ▀▄▀ █░░ █ █▀▀ █▀█ █▄░█  
 █░█ █▄▄ █ █▄▄ █▄█ █░▀█  
          
 █▀▄▀█ █▀▄
 █░▀░█ █▄▀
 
╭─────────────────⦿
┃    🔰〘 𝙄𝙉𝙁𝙊 〙🔰
╰┬────────────────⦿
┌┤
┃
┃ *_Founder_*: Salman Ahmad 
┃ *_Bot Name_*: ${botname}
┃ *_Mode_*: %mode
┃ *_HOST_*: kali Linix
┃ *_Type_*: NodeJs
┃ *_Baileys_*: Multi Device
┃ *_Prefix_*: [ *%_p* ]
┃ *_Uptime_*: %muptime
┃ *_Database_*:  %totalreg
┃
╰──────────────────⦿
╭──────────────────⦿
┃    🔰〘 𝙐𝙎𝙀𝙍 〙🔰
╰┬─────────────────⦿
┌┤     
┃
┃ *_Name_*: %name
┃ *_Gold_*: %credit
┃ *_Role_*: XLICON-MD-TESTER
┃ *_Level_*: %level [ %xp4levelup Xp For Levelup]
┃ *_Xp_*: %exp / %maxexp
┃ *_Total Xp_*: %totalexp
┃
╰──────────────────⦿
╭──────────────────⦿
┃   🔰〘 𝑰𝑵𝑭𝑶 𝑪𝑴𝑫 〙🔰
╰┬─────────────────⦿
┌┤ 
┃   ཌ|━━🤖 _BOT STATUS:_🤖━━|ད
┌─𐂅  *MADE BY XLICON*  𐂅
| ❁✓  *Creator:* XLICON-TEAM
| 🤖  *Bot Name:* XLICON-V2
| 💻  *Host:* Linux 🟩
| 📣  *Prefix:* ${usedPrefix} 
| 🕓  *Uptime:* ${uptime}
| 💌  *Database:* ${rtotalreg} of ${totaluser} 
| 📚  *Total Users:* ${totaluser} 
╰┬─────────────────⦿

┌─☠︎︎「⏰ *_Today's Sauce!_* ⏰」
| 📆  *Today's Date:* ${date} 
| ⏲️  *Current Time:* ${wib} 
╰┬─────────────────⦿

┌─𐂅「 *👤USER* 」
| 👾  *User Tag:* ${taguser} 
| 😇  *Name:* ${name} 
| ✰  *Master Mind:* AB&SALMAN
| 💎  *Diamonds:* -9999
| 🏆  *Rank:* ${role}
| 🎮  *XP:* ${exp} 
╰┬─────────────────⦿

 
┌─☛『 *_Fellowship_* 』☚
┃❏*bible [chapter_number|chapter_name]
❏*quran [surah_number|surah_name]
╰┬─────────────────⦿
┌─☛『 *_AI_* 』☚
┃❏*bingimg2
┃❏*chatgpt
┃❏*aisearch
┃❏*toanime
┃❏*gitagpt
┃❏*chat
┃❏*blackbox
┃❏*bingimg <query>
┃❏*tocartoon
┃❏*dalle
╰┬─────────────────⦿
┌─☛『 *_image_* 』☚
┃❏*blackpink
╰┬─────────────────⦿
┌─☛『 *_tools_* 』☚
┃❏*gemini <text>
┃❏*nowa
┃❏*qr <text>
┃❏*qrcode <text>
┃❏*weather *<place>*
┃❏*shortlink <longLink>
┃❏*bitly <longlink>
┃❏*dehaze
┃❏*recolor
┃❏*hdr
┃❏*get
┃❏*length <amount>
┃❏*tinyurl <link>
┃❏*shorten <link>
┃❏*tempmail
┃❏*shazam
┃❏*cal <equation>
┃❏*.carbon <code>
┃❏*define <word>
┃❏*element
┃❏*itunes
┃❏*lyrics
┃❏*imdb
┃❏*course
┃❏*randomcourse
┃❏*readmore <text1>|<text2>
┃❏*readvo
┃❏*removebg
┃❏*ss <url>
┃❏*ssf <url>
┃❏*style <key> <text>
┃❏*subreddit
┃❏*telesticker  Ⓛ
┃❏*tourl
┃❏*translate <lang> <text>
┃❏*tts <lang> <task>
┃❏*wa
┃❏*wikipedia
┃❏*true
┃❏*findmusic
┃❏*githubstalk <query>
╰┬─────────────────⦿
┌─☛『 *_group_* 』☚
┃❏*getbio <@tag/reply>  Ⓛ
┃❏*getbio <@tag/reply>  Ⓛ
┃❏*animequote
┃❏*Setdesc <text>
┃❏*setname <text>
┃❏*add
┃❏*delete
┃❏*delwarn @user
┃❏*demote (@tag)
┃❏*infogp
┃❏*hidetag
┃❏*invite <917xxx>
┃❏*kick @user
┃❏*link
┃❏*poll question|option|option
┃❏*profile
┃❏*promote
┃❏*resetlink
┃❏*setbye <text>
┃❏*group *open/close*
┃❏*setwelcome <text>
┃❏*simulate <event> @user
┃❏*staff
┃❏*tagall
┃❏*totag
┃❏*warn @user
┃❏*warns
╰┬─────────────────⦿
┌─☛『 *_anime_* 』☚
┃❏*anime
┃❏*akira
┃❏*akiyama
┃❏*anna
┃❏*asuna
┃❏*ayuzawa
┃❏*boruto
┃❏*chiho
┃❏*chitoge
┃❏*deidara
┃❏*erza
┃❏*elaina
┃❏*eba
┃❏*emilia
┃❏*hestia
┃❏*hinata
┃❏*inori
┃❏*isuzu
┃❏*itachi
┃❏*itori
┃❏*kaga
┃❏*kagura
┃❏*kaori
┃❏*keneki
┃❏*kotori
┃❏*kurumi
┃❏*madara
┃❏*mikasa
┃❏*miku
┃❏*minato
┃❏*naruto
┃❏*nezuko
┃❏*sagiri
┃❏*sasuke
┃❏*sakura
┃❏*akira
┃❏*amv  Ⓛ
┃❏*waifu
┃❏*neko
┃❏*zerotwo
┃❏*loli
┃❏*jjanime  Ⓛ
┃❏*pokedex <pokemon>
┃❏*trace
╰┬─────────────────⦿
┌─☛『 *_img_* 』☚
┃❏*messi
┃❏*cristianoronaldo
┃❏*cr7
┃❏*ppcouple
┃❏*ppcp
┃❏*pinterest
╰┬─────────────────⦿
┌─☛『 *_owner_* 』☚
┃❏*leavegc
┃❏*out
┃❏*deletechat
┃❏*pin
┃❏*unpin
┃❏*deletechat
┃❏*addprem <@tag>
┃❏*addowner @user
┃❏*allow <@tag>
┃❏*HEROKU
┃❏*ban @user
┃❏*banchat
┃❏*tx
┃❏*broadcastgroup <text>
┃❏*bcgc <text>
┃❏*cleartmp
┃❏*delexpired
┃❏*delprem @user
┃❏*removeowner @user
┃❏*setppbotfull
┃❏*getplugin <name file>
┃❏*getfile <name file>
┃❏*join <chat.whatsapp.com> <dias>
┃❏*reset <54xxx>
┃❏*resetprefix
┃❏*restart
┃❏*.setprefix
┃❏*.setprefix [symbol]
┃❏*unban @user
┃❏*unbanchat
┃❏*update
┃❏*update now
┃❏*config
┃❏*listban
┃❏*deleteplugin <name>
╰┬─────────────────⦿
┌─☛『 *_fun_* 』☚
┃❏*afk <reason>
┃❏*tomp3
┃❏*toav
┃❏*toxicity
┃❏*bot
┃❏*character @tag
┃❏*dare
┃❏*flirt
┃❏*gay @user
┃❏*joke
┃❏*pickupline
┃❏*question
┃❏*shayari
┃❏*ship
┃❏*yomamajoke
┃❏*truth
┃❏*waste @user
┃❏*perv
┃❏*handsome
┃❏*hot
┃❏*sexy
┃❏*ugly
┃❏*cute
┃❏*playboy
┃❏*playgirl
┃❏*beautiful
┃❏*lesbian
┃❏*whore
┃❏*motherfucker
┃❏*sucker
┃❏*horny
┃❏*foolish
┃❏*nibba
┃❏*nibbi
┃❏*bitch
┃❏*waifu
┃❏*crackhead
┃❏*rascal
┃❏*idiot
┃❏*girlyboy
┃❏*tomboy
┃❏*gigachad
┃❏*mf
┃❏*introvert
┃❏*extrovert
┃❏*sigma
┃❏*psycho
┃❏*brainless
┃❏*useless
┃❏*singer
┃❏*image
┃❏*meme
┃❏*quote
╰┬─────────────────⦿
┌─☛『 *_reaction_* 』☚
┃❏*bully @tag
┃❏*cuddle @tag
┃❏*cry @tag
┃❏*hug @tag
┃❏*awoo @tag
┃❏*kiss @tag
┃❏*lick @tag
┃❏*pat @tag
┃❏*smug @tag
┃❏*bonk @tag
┃❏*yeet @tag
┃❏*blush @tag
┃❏*smile @tag
┃❏*wave @tag
┃❏*highfive @tag
┃❏*handhold @tag
┃❏*nom @tag
┃❏*bite @tag
┃❏*glomp @tag
┃❏*slap @tag
┃❏*kill @tag
┃❏*happy @tag
┃❏*wink @tag
┃❏*poke @tag
┃❏*dance @tag
┃❏*cringe @tag
╰┬─────────────────⦿
┌─☛『 *_utility_* 』☚
┃❏*bmi
┃❏*crypto
┃❏*currency
┃❏*countdown
┃❏*prayertime
┃❏*convert
╰┬─────────────────⦿
┌─☛『 *_main_* 』☚
┃❏*channel
┃❏*database
┃❏*user
┃❏*gpguru
┃❏*alive
┃❏*blocklist
┃❏*info
┃❏*owner
┃❏*totalfeature
┃❏*hack
┃❏*list
┃❏*botmenu
┃❏*ownermenu
┃❏*groupmenu
┃❏*dlmenu
┃❏*downloadermenu
┃❏*economymenu
┃❏*funmenu
┃❏*gamemenu
┃❏*stickermenu
┃❏*nsfwmenu
┃❏*logomenu
┃❏*toolmenu
┃❏*animemenu2
┃❏*animemenu
┃❏*listprem
┃❏*logomenu2
┃❏*ping
┃❏*ping2
┃❏*runtime
┃❏*script
┃❏*server
┃❏*system
┃❏*blocklist
┃❏*setprivacy
┃❏*allmenu
╰┬─────────────────⦿
┌─☛『 *_cmd_* 』☚
┃❏*delcmd <text>
┃❏*listcmd
┃❏*setcmd <txt>
╰┬─────────────────⦿
┌─☛『 *_information_* 』☚
┃❏*cninfo
┃❏*fact
╰┬─────────────────⦿
┌─☛『 *_finance_* 』☚
┃❏*crypto
╰┬─────────────────⦿
┌─☛『 *_cryptocurrency_* 』☚
┃❏*crypto
╰┬─────────────────⦿
┌─☛『 *_time_* 』☚
┃❏*countdown
╰┬─────────────────⦿
┌─☛『 *_downloader_* 』☚
┃❏*facebook <url>
┃❏*gdrive 🅟
┃❏*gitclone <url>
┃❏*igstalk
┃❏*instagram
┃❏*mediafire <url>
┃❏*mega
┃❏*modapk
┃❏*play <query>
┃❏*play2 <text>
┃❏*playvid <text>
┃❏*play3  Ⓛ
┃❏*tiktok <url>
┃❏*tiktokstalk
┃❏*twitter <url>
┃❏*ytmp3 <url>
┃❏*ytsearch
┃❏*ytmp4 <yt-link>
┃❏*wallpaper <query>
┃❏*play  Ⓛ
┃❏*play  Ⓛ
╰┬─────────────────⦿
┌─☛『 *_premium_* 』☚
┃❏*gdrive 🅟
┃❏*mediafire <url>
╰┬─────────────────⦿
┌─☛『 *_economy_* 』☚
┃❏*addgold <@user>
┃❏*addxp <@user>
┃❏*bank
┃❏*buych
┃❏*cock-fight <amount>
┃❏*buy
┃❏*buyall
┃❏*daily
┃❏*deposit
┃❏*gamble <amount> <color(red/black)>
┃❏*give credit [amount] [@tag]
┃❏*levelup
┃❏*rank
┃❏*rob
┃❏*roulette <amount> <color(red/black)>
┃❏*wallet
┃❏*withdraw
┃❏*work
╰┬─────────────────⦿
┌─❖『 *_core_* 』❖
┃❏*leaderboard
╰┬─────────────────⦿
┌─☛『 *_game_* 』☚
┃❏*slot <amount>
┃❏*chess [from to]
┃❏*chess delete
┃❏*chess join
┃❏*chess start
┃❏*delttt
┃❏*guessflag
┃❏*Maths <modes>
┃❏*ppt <rock/paper/scissors>
┃❏*tictactoe <tag number>
╰┬─────────────────⦿
┌─☛『 *_config_* 』☚
┃❏*enable <option>
┃❏*disable <option>
╰┬─────────────────⦿
┌─☛『 *_internet_* 』☚
┃❏*google <search>
┃❏*s <search>
╰┬─────────────────⦿
┌─☛『 *_maker_* 』☚
┃❏*blur
┃❏*difuminar2
┃❏*hornycard
┃❏*hornylicense
┃❏*gfx1
┃❏*gfx2
┃❏*gfx3
┃❏*gfx4
┃❏*gfx5
┃❏*gfx6
┃❏*gfx7
┃❏*gfx8
┃❏*gfx9
┃❏*gfx10
┃❏*gfx11
┃❏*gfx12
┃❏*simpcard
┃❏*itssostupid
┃❏*iss
┃❏*stupid
┃❏*tweet <comment>
┃❏*lolicon
┃❏*quozio
┃❏*qmkr
┃❏*ytcomment <comment>
╰┬─────────────────⦿
┌─☛『 *_nsfw_* 』☚
┃❏*nsfw
╰┬─────────────────⦿
┌─☛『 *_advanced_* 』☚
┃❏$
╰┬─────────────────⦿
┌─☛『 *_plugin_* 』☚
┃❏*plugins
┃❏*install <Gist URL>
╰┬─────────────────⦿
┌─☛『 *_rg_* 』☚
┃❏*reg <name.age>
┃❏*mysn
┃❏*unreg <Num Serie>
╰┬─────────────────⦿
┌─☛『 *_sticker_* 』☚
┃❏*emojimix <emoji+emoji>
┃❏*getsticker
┃❏*smaker
┃❏*stickerwithmeme (caption|reply media)
┃❏*swmeme <url>
┃❏*swm(caption|reply media)
┃❏*sfull
┃❏*toimg <sticker>
┃❏*tovid
┃❏*trigger <@user>
┃❏*ttp
┃❏*ttp2
┃❏*ttp3
┃❏*ttp4
┃❏*ttp5
┃❏*attp
┃❏*attp2
┃❏*attp3
┃❏*take <name>|<author>
╰┬─────────────────⦿
┌─↘☛『 *_audio_* 』☚
┃❏*bass [vn]
┃❏*blown [vn]
┃❏*deep [vn]
┃❏*earrape [vn]
┃❏*fast [vn]
┃❏*fat [vn]
┃❏*nightcore [vn]
┃❏*reverse [vn]
┃❏*robot [vn]
┃❏*slow [vn]
┃❏*smooth [vn]
┃❏*tupai [vn]
╰┬─────────────────⦿
┌─☛『 *_news_* 』☚
┃❏*news
┃❏*technews
╰┬─────────────────⦿
┌─➢『 *_conversion_* 』❖
┃❏*convert
╰┬─────────────────⦿
XLICON-𝙼𝙳-𝚅𝟸 𝙱𝚈 AB AND SALMAN

╰──────────────────⦿

'; // Replace with your actual static message
    let author = 'XLICON-V2'; // Replace with the actual author name or relevant string

    await conn.sendButton(
        m.chat,
        result,
        author,
        'https://telegra.ph/file/325630f66abc968eda8e2.mp4',
        [['Menu', `${usedPrefix}menu`]],
        null,
        [['Fork repo', 'https://github.com/salmanytofficial/XLICON-V2-MD']],
        m
    );
};

handler.help = ['bmenu'];
handler.tags = ['main'];
handler.command = ['bmenu'];

export default handler;
