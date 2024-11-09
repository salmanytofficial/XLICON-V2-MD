import ytSearch from "yt-search";
import { youtubedl, youtubedlv2 } from "@bochilteam/scraper-sosmed";

let handler = async (messageContext, {
  conn: connection,
  command,
  text: searchQuery,
  usedPrefix
}) => {
  if (!searchQuery) {
    throw `Example usage:\n${usedPrefix + command} funk reverso`;
  }

  let searchResults = await ytSearch(searchQuery);
  let video = searchResults.videos[0];

  await connection.sendMessage(messageContext.chat, {
    "react": {
      "text": "⏳",
      "key": messageContext.key
    }
  });

  if (!video) {
    throw "Couldn’t find anything, try another name.";
  }

  let {
    title,
    description,
    videoId,
    durationH,
    viewH,
    publishedTime
  } = video;

  const videoUrl = "https://www.youtube.com/watch?v=" + videoId;

  const downloadInfo = await youtubedl(videoUrl).catch(async () => await youtubedlv2(videoUrl));
  const audioUrl = await downloadInfo.audio["128kbps"].download();

  let nowPlayingMessage = `*🎧 Now Playing:* ${title}`;
  
  await connection.sendMessage(messageContext.chat, { "text": nowPlayingMessage }, { "quoted": messageContext });

  const audioMessage = {
    "audio": { url: audioUrl },
    "mimetype": "audio/mp4",
    "ptt": false
  };

  return connection.sendMessage(messageContext.chat, audioMessage, { "quoted": messageContext });
};

handler.help = ["play"];
handler.tags = ["downloader"];
handler.command = /^play|audio$/i;

export default handler;
