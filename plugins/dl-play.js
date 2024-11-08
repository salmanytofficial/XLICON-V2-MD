import youtubedl from 'youtubedl-core';
import 'youtube-yts';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
import axios from 'axios';

const streamPipeline = promisify(pipeline);

let handler = async (message, { conn, command, text, usedPrefix }) => {
  if (!text) {
    throw `Use example ${usedPrefix}${command} Jesus take the wheel`;
  }
  
  await message.react('⏳');

  try {
    const query = encodeURIComponent(text);
    const searchResponse = await axios.get(`https://api.gurubot.com/ytsearch?text=${query}`);
    const video = searchResponse.data.results[0];
    
    if (!video) {
      throw "Video Not Found, Try Another Title";
    }

    const { title, thumbnail, duration, views, uploaded, url } = video;
    const caption = `⬡▸  ••๑⋯ ⬡▸  Y O U T U B E ⬡▸  ⋯⋅๑•• ✼\n\n  ⬡▸  Title: ${title}\n\n  ⬡▸  Duration: ${duration}\n\n  ⬡▸  Views: ${views}\n\n  ⬡▸  Upload: ${uploaded}\n\n  ⬡▸  Link: ${url}\n\n⊱─━━━━⊱༻XLICON●v2༺⊰━━━━─⬡▸ `;
    
    await conn.sendMessage(message.chat, {
      image: { url: thumbnail },
      caption: caption,
      footer: 'Your Bot Name',
    }, {
      quoted: message
    });

    const audioStream = youtubedl(url, {
      filter: 'audioonly',
      quality: 'highestaudio',
    });

    const tempDir = os.tmpdir();
    const filePath = `${tempDir}/${title}.mp3`;
    const fileStream = fs.createWriteStream(filePath);

    await streamPipeline(audioStream, fileStream);

    const audioMessage = {
      audio: { url: filePath },
      mimetype: 'audio/mpeg',
      ptt: false,
      waveform: [100, 0, 0, 0, 0, 0, 100],
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: 'HERE IS YOUR SONG MADE BY XLICON-v2',
          sourceUrl: url,
          thumbnail: await (await conn.getFile(thumbnail)).data,
        },
      },
    };

    await conn.sendMessage(message.chat, audioMessage, { quoted: message });

    fs.unlink(filePath, err => {
      if (err) {
        console.error(`Failed to delete audio file: ${err}`);
      } else {
        console.log(`Deleted audio file: ${filePath}`);
      }
    });
  } catch (error) {
    console.error(error);
    throw "An error occurred while searching for YouTube videos.";
  }
};

handler.help = ["play"].map(v => v + " <query>");
handler.tags = ['downloader'];
handler.command = /^play$/i;
handler.exp = 0;

export default handler;
