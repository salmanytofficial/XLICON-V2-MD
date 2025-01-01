import fetch from 'node-fetch';

const extractVideoId = (text) => {
  const urlPattern = /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z0-9_-]+)$/;
  const match = text.match(urlPattern);
  return match ? (match[1] || match[2]) : null;
};

let handler = async (m, { command, conn, text }) => {
  if (!text) {
    throw "No text to search, please enter the name of the song or a YouTube link.\n\n*EXAMPLE:\n#play2 - Hope xxxtentacion\n#play2 - https://youtu.be/MwpMEbgC7DA*";
  }
  
  try {
    let videoId = extractVideoId(text);
    if (!videoId) {
      let searchResponse = await fetch(`https://weeb-api.vercel.app/ytsearch?query=${encodeURIComponent(text)}`);
      let searchResult = await searchResponse.json();
      if (searchResult.results.length === 0) throw new Error("No results found");
      videoId = searchResult.results[0].id;
    }

    if (command === "play2") {
      conn.reply(m.chat, "*_sending your audio..._*", m);
      try {
        let downloadResponse = await fetch(`https://api.davidcyriltech.my.id/download/ytmp3?url=https://www.youtube.com/watch?v=${videoId}`);
        let downloadResult = await downloadResponse.json();
        if (downloadResult.success) {
          await conn.sendMessage(m.chat, {
            'audio': { 'url': downloadResult.result.download_url },
            'fileName': "audio.mp3",
            'mimetype': "audio/mpeg"
          }, { 'quoted': m });
        } else {
          throw new Error("Failed to fetch audio");
        }
      } catch (error) {
        console.error(error);
        conn.reply(m.chat, "*Error occurred, please try again later.*", m);
      }
    }

    if (command === "playvid") {
      conn.reply(m.chat, "*_⏳Processing your video...⏳_*", m);
      try {
        let downloadResponse = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=https://www.youtube.com/watch?v=${videoId}`);
        let downloadResult = await downloadResponse.json();
        if (downloadResult.success) {
          await conn.sendMessage(m.chat, {
            'video': { 'url': downloadResult.result.download_url },
            'fileName': 'video.mp4',
            'caption': downloadResult.result.title,
            'thumbnail': downloadResult.result.thumbnail,
            'mimetype': "video/mp4"
          }, { 'quoted': m });
        } else {
          throw new Error("Failed to fetch video");
        }
      } catch (error) {
        console.error(error);
        conn.reply(m.chat, "*Error occurred, please try again later.*", m);
      }
    }
  } catch (error) {
    conn.reply(m.chat, "*Error occurred, please try again later.*", m);
  }
};

handler.help = ["play2", "playvid"].map(cmd => cmd + " <text or YouTube link>");
handler.tags = ["downloader"];
handler.command = ["play2", 'playvid'];
export default handler;
