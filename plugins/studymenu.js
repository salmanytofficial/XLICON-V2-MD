let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Assets/XLICON-V2.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `
╭─⍟📚 *STUDY MENU* 📚⍟─┐
┊ ꒰ ͜͡➸${usedPrefix}bible
┊ ꒰ ͜͡➸${usedPrefix}quran  
┊ ꒰ ͜͡➸${usedPrefix}gpt
┊ ꒰ ͜͡➸${usedPrefix}ai    
┊ ꒰ ͜͡➸${usedPrefix}bing  
┊ ꒰ ͜͡➸${usedPrefix}bard 
┊ ꒰ ͜͡➸${usedPrefix}quote/q  
┊ ꒰ ͜͡➸${usedPrefix}aisearch 
┊ ꒰ ͜͡➸${usedPrefix}define
┊ ꒰ ͜͡➸${usedPrefix}element
└──📱•✧✧✧✧✧✧✧•📱──┘`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['study', 'sd', 'studymenu'] 

export default handler
