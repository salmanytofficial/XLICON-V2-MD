import fetch from 'node-fetch';

let handler = async (m, { command, conn, text }) => {
  if (!text) {
    throw "No text to search, please enter the name of the song you want to play.\n\n*EXAMPLE:\n#play2  - Hope xxxtentacion*";
  }
  try {
    if (command === "play2") {
      conn.reply(m.chat, "*_sending your audio..._*", m);
      try {
        let searchResponse = await fetch(`https://weeb-api.vercel.app/ytsearch?query=${encodeURIComponent(text)}`);
        let searchResult = await searchResponse.json();
        if (searchResult.results.length === 0) throw new Error("No results found");
        let videoUrl = searchResult.results[0].url;
        let downloadResponse = await fetch(`https://api.giftedtech.my.id/api/download/ytdl?apikey=gifted&url=${encodeURIComponent(videoUrl)}`);
        let downloadResult = await downloadResponse.json();
        if (downloadResult.success) {
          await conn.sendMessage(m.chat, {
            'audio': { 'url': downloadResult.result.audio_url },
            'fileName': "audio.mp3",
            'mimetype': "audio/mp4"
          }, { 'quoted': m });
        } else {
          throw new Error("Failed to fetch audio");
        }
      } catch (error) {
        console.error(error);
        m.reply("*Error occurred, please try again later.*");
      }
    }

    if (command === "playvid") {
      conn.reply(m.chat, "*_⏳Processing your video...⏳_*", m);
      try {
        let searchResponse = await fetch(`https://weeb-api.vercel.app/ytsearch?query=${encodeURIComponent(text)}`);
        let searchResult = await searchResponse.json();
        if (searchResult.results.length === 0) throw new Error("No results found");
        let videoUrl = searchResult.results[0].url;
        let downloadResponse = await fetch(`https://api.giftedtech.my.id/api/download/ytdl?apikey=gifted&url=${encodeURIComponent(videoUrl)}`);
        let downloadResult = await downloadResponse.json();
        if (downloadResult.success) {
          await conn.sendMessage(m.chat, {
            'video': { 'url': downloadResult.result.video_url },
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
        m.reply("*Error occurred, please try again later.*");
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
