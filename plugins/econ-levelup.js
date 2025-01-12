import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn }) => {
    let name = conn.getName(m.sender);
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg');
    let user = global.db.data.users[m.sender];
    let background = 'https://telegra.ph/file/13b0b0f7513b242559f1f.jpg'; 
    let waifuImg = global.hwaifu[Math.floor(Math.random() * global.hwaifu.length)]; 

    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier);
        let txt = `
┌───⊷ *LEVEL*
▢ Number : *${name}*
▢ Level : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
▢ Role : *${user.role}*
└──────────────

Hey there, ${name}! You're not ready to level up just yet. It seems like you need to munch up *${max - user.exp}* more XP to level up and reach new heights! Keep going, and the bots will be singing your praises soon! 🚀
`.trim();

        try {
            conn.sendFile(m.chat, waifuImg, 'level.jpg', txt, m);
        } catch (e) {
            m.reply(txt);
        }
    } else {
        let str = `
┌─⊷ *LEVEL UP*
▢ Previous level : *${user.level - 1}*
▢ Current level : *${user.level}*
▢ Role : *${user.role}*
└──────────────

Woo-hoo, ${name}! You've soared to new heights and reached level ${user.level}! 🎉 Time to celebrate! 🎊
Your newfound power will strike fear into the hearts of trolls, and the bots will bow before your command! Keep up the incredible work, and who knows what epic adventures await you next! 🌟
`.trim();

        try {
            conn.sendFile(m.chat, waifuImg, 'levelup.jpg', str, m);
        } catch (e) {
            m.reply(str);
        }
    }
}

handler.help = ['levelup'];
handler.tags = ['economy'];
handler.command = ['lvl', 'levelup', 'level'];

export default handler;
