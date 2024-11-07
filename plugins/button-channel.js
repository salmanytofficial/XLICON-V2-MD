import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async m => {
  const imageBuffer = await (await fetch('https://telegra.ph/file/403a47e628ef49dee27a3.jpg')).buffer();
  let imgurl = await uploadImage(imageBuffer);

  const messageContent = `
  ╭⭑⭑⭑★✪ *XLICON* ✪★⭑⭑⭑
  │ 📂 *BOT Name:* _XLICON-V2-MD_
  │ 📝 *Description:* _I'm XLICON-V2. A MultiDevice WhatsApp bot with rich features Created By SALMAN AMAD and Abraham Dwamena._
  │ 👤 *Owner:* _Salman Ahmad_
  │ 🌐 *Channel:* https://whatsapp.com/channel/0029VaE8GbCDzgTILE7OtC3e
  ╰━━━━━━━━━━━━━━━━╯
  `.trim();

  await conn.sendButton(
    m.chat,
    'Here is your Result',
    author,
    imgurl,
    [['MENU', `${usedPrefix}menu`], ['WATCH ANIME', `https://ab-streamer.vercel.app`]],
    m
  );
};

handler.help = ['bchannel'];
handler.tags = ['main'];
handler.command = ['xlchannel', 'bchannel'];
export default handler;
