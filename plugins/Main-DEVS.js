var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "𝐇𝐞𝐲" }, "message":{ "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = Img.getRandom()	
const cat = `*_XLICON-V2_*


*_—🔰 𝐗𝐥𝐢𝐜𝐨𝐧 𝐯𝟐  𝐃𝐄𝐕 𝟏 wa.me/+233533763772_*

*_—🔰 𝐗𝐥𝐢𝐜𝐨𝐧 𝐯𝟐  𝐃𝐄𝐕 2 wa.me/+923184070915_*
*---------------------*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${developer}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = [devr', 'maindev']
handler.tags = ['info']
handler.command = /^(maindev|devi)$/i

export default handler
