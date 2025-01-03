import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime) {
    throw '✳️ Respond to an image/video';
  }
  let mediaBuffer = await q.download();

  if (mediaBuffer.length > 10 * 1024 * 1024) {
    throw '✴️ Media size exceeds 10 MB. Please upload a smaller file.';
  }

  let currentModuleDirectory = path.dirname(new URL(import.meta.url).pathname);

  let tmpDir = path.join(currentModuleDirectory, '../tmp');
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }

  let mediaPath = path.join(tmpDir, `media_${Date.now()}.${mime.split('/')[1]}`);
  fs.writeFileSync(mediaPath, mediaBuffer);

  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);

  if (isTele) {
    let link;
    try {
      link = await uploadToCatbox(mediaPath);
      console.log('Catbox response link:', link); 
    } catch (error) {
      console.error('Error uploading to Catbox:', error);
      link = 'Upload failed, please try again';
    }

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2);

    m.reply(`✅ *Media Upload Successful*\n♕ *File Size:* ${fileSizeMB} MB\n♕ *URL:* ${link}`);
  } else {
    m.reply(`♕ ${mediaBuffer.length} Byte(s) 
    ♕ (Unknown)`);
  }

  fs.unlinkSync(mediaPath);
};

const uploadToCatbox = async (filePath) => {
  const form = new FormData();
  form.append('reqtype', 'fileupload');
  form.append('fileToUpload', fs.createReadStream(filePath));

  const response = await fetch('https://catbox.moe/user/api.php', {
    method: 'POST',
    body: form
  });

  if (!response.ok) {
    throw new Error('Failed to upload to Catbox');
  }

  const link = await response.text();
  console.log('Raw Catbox response:', link); 
  return link.trim();  
};

handler.help = ['caturl'];
handler.tags = ['tools'];
handler.command = ['myrl', 'caturl'];

export default handler;
