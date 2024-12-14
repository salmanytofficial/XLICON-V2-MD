import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import 'fs';
import 'path';
import fetch from 'node-fetch';

let handler = async (m) => {
  let message = m.quoted ? m.quoted : m;
  let mimetype = (message.msg || message).mimetype || '';
  
  if (!mimetype) {
    throw "✳️ Respond to an image/video";
  }

  await m.react('⏳');
  let mediaBuffer = await message.download();
  
  if (mediaBuffer.length > 10485760) {
    throw "thats too much mb."; 
  }

  let isImageOrVideo = /image\/(png|jpe?g|gif)|video\/mp4/.test(mimetype);
  let uploadedMediaUrl = await (isImageOrVideo ? uploadImage : uploadFile)(mediaBuffer);
  
  if (uploadedMediaUrl) {
    let response = await (await fetch(`https://bk9.fun/ai/Text2Img?url=${uploadedMediaUrl}&q=${m.text`})).json(); 
    await m.react('✅');
    
    const result = {
      text: response.BK9
    };
    
    await conn.sendMessage(m.chat, result, { 'quoted': m });
  } else {
    m.reply(♕ ${mediaBuffer.length} Byte(s) \n♕ (Unknown));
    await m.react('✅');
  }
};

handler.help = ['dalle']; 
handler.tags = ['ai']; 
handler.command = /^(dalle)$/i; 

export default handler;
