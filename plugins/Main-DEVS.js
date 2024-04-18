var handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let owners = '233508488192 - *ABRAHAM*'; // Define owners variable

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "hey"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let pp = './Assets/XLICON-V2.jpg';

  const cat = `*_XLICON-V2_*

*_—🔰 𝐗𝐥𝐢𝐜𝐨𝐧 𝐯𝟐  𝐃𝐄𝐕 𝟏 wa.me/+233533763772 %dont_contact_me%_*

*_—🔰 𝐗𝐥𝐢𝐜𝐨𝐧 𝐯𝟐  𝐃𝐄𝐕 2 wa.me/+923184070915_*
*---------------------*

*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${owners}*`;

  await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak);
};

handler.help = ['devi', 'maindev'];
handler.tags = ['info'];
handler.command = /^(maindev|devi)$/i;

export default handler;
