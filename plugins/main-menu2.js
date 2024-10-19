import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
import fetch from 'node-fetch';
import fs from 'fs';
import moment from 'moment-timezone';

const time = moment.tz('Asia/Kolkata').format('HH');
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss');

let handler = async (m, { conn, usedPrefix, command }) => {
    let d = new Date(new Date + 3600000);
    let locale = 'en';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
    let pp = './Assets/XLICON-V2.jpg';
    let user = global.db.data.users[who];
    let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who];
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let totaluser = Object.values(global.db.data.users).length; 
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length; 
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850); 
    let greeting = ucapan();
    let quote = bibleQuotes[Math.floor(Math.random() * bibleQuotes.length)];

    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let str = `
🚀 *_Buckle up ${name}, ${greeting}! We're going on an adventure!*_ 🚀

🌠 *_Bible quote of the day: ${quote}_* 🌠

┏━━🤖 _BOT STATUS:_🤖━━┓
┃ 🏮  *Founder:* Salman Ahmad
┃ 🤡  *Bot Name:* ${botname} 
┃ 💻  *Host:* Kali Linux
┃ 📣  *Prefix:* ${usedPrefix} 
┃ 🕓  *Uptime:* ${uptime}
┃ 💌  *Database:* ${rtotalreg} of ${totaluser} 
┃ 📚  *Total Users:* ${totaluser} 
╰───────────────⍟

┏━━⏰ _Today's Sauce!_ ⏰━┓
┃ 📆  *Today's Date:* ${date} 
┃ ⏲️  *Current Time:* ${wib} 
╰───────────────⍟

┏━😎 _User Info:_ 😎━┓
┃ 👾  *User Tag:* ${taguser} 
┃ 😇  *Name:* ${name} 
┃ 🌟  *Master Mind:* ${author} 
┃ 💎  *Diamonds:* ${diamond} 
┃ 🏆  *Rank:* ${role}
┃ 🎮  *XP:* ${exp} 
╰───────────────⍟
😇 *_If You need help, Just do this, use ${usedPrefix}list or ${usedPrefix}help2. And enjoy!*_ 😇
`;

    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt);
    m.react(done);
};

handler.help = ['main'];
handler.tags = ['group'];
handler.command = ['menu2', 'help2'];

export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

function ucapan() {
    const time = moment.tz('Asia/Kolkata').format('HH');
    let res = "happy early in the day☀️";
    if (time >= 4) {
        res = "Good Morning 🌄";
    }
    if (time >= 10) {
        res = "Good Afternoon ☀️";
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇";
    }
    if (time >= 18) {
        res = "Good Night 🌙";
    }
    return res;
}

const bibleQuotes = [
    "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
    "I can do all this through him who gives me strength. - Philippians 4:13",
    "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
    "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding. - Proverbs 9:10",
    "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. - Galatians 5:22",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. - Matthew 6:34",
    "He heals the brokenhearted and binds up their wounds. - Psalm 147:3",
    "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9"
];
