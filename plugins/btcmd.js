import axios from 'axios';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    // Define 'result' and 'author' with static values
     let botname = 'XLICON-V2'; // Replace with your bot's name or fetch dynamically
    let mode = 'Multi-Device'; // Replace with your bot's mode or fetch dynamically
    let muptime = '10h 30m'; // Replace with your bot's uptime or fetch dynamically
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850); 
    let who = m.sender;
    let user = global.db.data.users[who];
    let result = ' 「 ${botname} 🎁XMD 」\n
  *%ucpn*
⍟────────────────⍟
*REMEMBER THIS BOT IS FOR*
*EDUCATIONAL PERPOSES*
⍟────────────────⍟
*©Salman Ahmad*
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
┃    🔰〘 𝙄𝙉𝙁𝙊 〙🔰
╰┬────────────────⦿
┌┤
┃
┃ *_Founder_*: Salman Ahmad 
┃ *_Bot Name_*: ${botname}
┃ *_Mode_*: ${mode}
┃ *_HOST_*: kali Linix
┃ *_Type_*: NodeJs
┃ *_Baileys_*: Multi Device
┃ *_Prefix_*: [ *${usedPrefix}* ]
┃ *_Uptime_*: ${muptime}
┃ *_Database_*: ${user.totalreg}
┃
╰──────────────────⦿
╭──────────────────⦿
┃    🔰〘 𝙐𝙎𝙀𝙍 〙🔰
╰┬─────────────────⦿
┌┤     
┃
┃ *_Name_*: ${user.name}
┃ *_Gold_*: ${user.credit}
┃ *_Role_*: XLICON-MD-TESTER
┃ *_Level_*: ${user.level} [ ${user.xp4levelup} Xp For Levelup]
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
| 🕓  *Uptime:* ${muptime}
╰┬─────────────────⦿

┌─𐂅「 *👤USER* 」
| 😇  *Name:* ${user.name}
| ✰  *Master Mind:* AB&SALMAN
| 💎  *Diamonds:* -9999
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
┌─☛『 *_owner_* 』☚
┃❏*owner
┃❏*shutdown
┃❏*xlicon [auto]
┃❏*sendmsg
┃❏*ban @user
┃❏*block @user
┃❏*broadcast [text]
┃❏*delcase @user
┃❏*disable @user
┃❏*enable @user
┃❏*eval <code>
┃❏*join <link>
┃❏*leave
┃❏*ban@user
┃❏*bc
┃❏*bcgc <text>
┃❏*resetcase @user
┃❏*restart
┃❏*spam [text] <amount>
┃❏*sudo <text>
┃❏*tg <code>
┃❏*user @user
┃❏*usercmd @user
┃❏*youtube @user
┃❏*logout
╰┬─────────────────⦿
┌─☛『 *_downloads_* 』☚
┃❏*fb <link>
┃❏*igdl <link>
┃❏*mediafire <link>
┃❏*shortlink <link>
┃❏*ytmp4 <link>
┃❏*ytdl <link>
┃❏*tiktok <link>
┃❏*tiktokdl <link>
┃❏*vimeodl <link>
┃❏*ytmp3 <link>
┃❏*ytmp4 <link>
┃❏*ytplaylist <link>
┃❏*xvideos <link>
┃❏*ytvideo <link>
┃❏*ytdl <link>
┃❏*mediafire <link>
┃❏*twitter <link>
┃❏*twittermp3 <link>
┃❏*tiktokaudio <link>
┃❏*soundcloud <link>
┃❏*igstory <link>
╰┬─────────────────⦿
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
