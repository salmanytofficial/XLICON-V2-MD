import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (message, { conn, args, usedPrefix, text, command }) => {
  await message.reply('Please wait...');
  if (!text) {
    return message.reply("Enter your number\nExample: .amv 1");
  }
  if (text === '1') {
    try {
      let video = await getAnimeVideo();
      await conn.sendFile(message.chat, video.source, '', "Here is your video", message);
    } catch (error) {
      await message.reply('An error occurred.');
    }
  }
  if (text === '2') {
    try {
      let video = await getAnimeVideo2();
      await conn.sendFile(message.chat, video.source, '', "Script video made by XLICON", message);
    } catch (error) {
      await message.reply('An error occurred.');
    }
  }
};

handler.help = ["amv"];
handler.tags = ["anime"];
handler.command = /^(amv)$/i;
handler.limit = true;
export default handler;

async function getAnimeVideo() {
  const response = await fetch("https://shortstatusvideos.com/anime-video-status-download/");
  const html = await response.text();
  const $ = cheerio.load(html);
  const videoList = [];
  
  $("a.mks_button.mks_button_small.squared").each((index, element) => {
    const videoUrl = $(element).attr("href");
    const videoTitle = $(element).closest('p').prevAll('p').find("strong").text();
    videoList.push({
      'title': videoTitle,
      'source': videoUrl
    });
  });

  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
}

async function getAnimeVideo2() {
  const response = await fetch("https://mobstatus.com/anime-whatsapp-status-video/");
  const html = await response.text();
  const $ = cheerio.load(html);
  const videoList = [];
  const videoTitle = $('strong').text();
  
  $("a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy").each((index, element) => {
    const videoUrl = $(element).attr("href");
    videoList.push({
      'title': videoTitle,
      'source': videoUrl
    });
  });

  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
}
