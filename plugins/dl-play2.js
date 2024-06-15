import fetch from 'node-fetch';
import ytSearch from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

let handler = async (m, { command, conn, text }) => {
  if (!text) {
    throw "No text to search, please enter the name of the song you want to play.\n\n*EXAMPLE:\n#play2  - Hope xxxtentacion*";
  }
  try {
    if (command === "play2") {
      conn.reply(m.chat, "*_sending your audio..._*", m);
      try {
        let response = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        let result = await response.json();
        let sent = await conn.sendMessage(m.chat, {
          'audio': { 'url': result.result.audio },
          'fileName': "error.mp3",
          'mimetype': "audio/mp4"
        }, { 'quoted': m });
        if (!sent) {
          await conn.sendFile(m.chat, result.result.audio, "error.mp3", null, m, false, { 'mimetype': "audio/mp4" });
        }
      } catch {
        let ytResult = await ytPlay(text);
        let audioUrl = ytResult.result2[0].audio || ytResult.result2[1].audio || ytResult.result2[2].audio || ytResult.result2;
        await conn.sendMessage(m.chat, {
          'audio': { 'url': audioUrl },
          'fileName': "error.mp3",
          'mimetype': "audio/mp4"
        }, { 'quoted': m });
      }
    }

    if (command === "playvid") {
      conn.reply(m.chat, "*_⏳Processing your video...⏳_*", m);
      try {
        let ytVideoResult = await ytPlayVid(text);
        await conn.sendMessage(m.chat, {
          'video': { 'url': ytVideoResult.result },
          'fileName': 'error.mp4',
          'caption': "_XLICON V2 MD_",
          'thumbnail': ytVideoResult.thumb,
          'mimetype': "video/mp4"
        }, { 'quoted': m });
      } catch {
        let response = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        let result = await response.json();
        await conn.sendFile(m.chat, result.result.video, "error.mp4", "_XLICON V2 MD_", m);
      }
    }
  } catch (error) {
    m.reply("*Error occurred, please try again later.*");
  }
};

handler.help = ["play2", "playvid"].map(cmd => cmd + " <text>");
handler.tags = ["downloader"];
handler.command = ["play2", 'playvid'];
export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    resolve((bytes / 1024 ** i).toFixed(1) + " " + sizes[i]);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async info => {
      let audioFormats = info.formats.filter(format => format.mimeType === "audio/webm; codecs=\"opus\"");
      let formatted = [];
      for (let format of audioFormats) {
        let size = await bytesToSize(format.contentLength);
        formatted.push({ 'audio': format.url, 'size': size });
      }
      let valid = formatted.filter(item => item.audio !== undefined && item.size !== undefined);
      let shortUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${valid[0].audio}`);
      resolve({
        'title': info.videoDetails.title,
        'result': shortUrl.data,
        'result2': valid,
        'thumb': info.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
      });
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async info => {
      let videoFormats = info.formats.filter(format => format.container === "mp4" && format.hasVideo === true && format.hasAudio === true);
      let formatted = [];
      for (let format of videoFormats) {
        let size = await bytesToSize(format.contentLength);
        formatted.push({ 'video': format.url, 'quality': format.qualityLabel, 'size': size });
      }
      let valid = formatted.filter(item => item.video !== undefined && item.size !== undefined && item.quality !== undefined);
      let shortUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${valid[0].video}`);
      resolve({
        'title': info.videoDetails.title,
        'result': shortUrl.data,
        'result2': valid[0].video,
        'thumb': info.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
      });
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    ytSearch(query).then(async result => {
      let videos = result.videos.slice(0, 5);
      let urls = videos.map(video => video.url);
      let firstUrl = urls[0];
      let mp3Result = await ytMp3(firstUrl);
      resolve(mp3Result);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    ytSearch(query).then(async result => {
      let videos = result.videos.slice(0, 5);
      let urls = videos.map(video => video.url);
      let firstUrl = urls[0];
      let mp4Result = await ytMp4(firstUrl);
      resolve(mp4Result);
    }).catch(reject);
  });
}
