import fg from 'api-dylux';
import yts from 'yt-search';
import fetch from 'node-fetch';
import axios from 'axios';

const imgUrl = 'https://telegra.ph/file/81199f8c1cdc906cf04d0.jpg';

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let formats = ["mp3", "yta", "audio", "ytv", "video", "mp4", "mp3doc", "ytadoc", "audiodoc", "mp4doc", "ytvdoc", "videodoc"];

    let [format, ...keywords] = text.split(" ");
    let searchQuery = keywords.join(" ");
    
    if (!formats.includes(format)) {
        return conn.reply(m.chat, `*💙 Please enter the format you wish to download and the title of a video or music from YouTube.*\n\nExample: ${usedPrefix + command} *mp3* Connor RK800 - I Am Machine\n\nAvailable formats:\n${formats.map(f => `${usedPrefix + command} *${f}*`).join('\n')}`, m);
    }
    
    if (!searchQuery) {
        return conn.reply(m.chat, `*💙 Please enter the title of a video or music from YouTube.*`, m);
    }
    
    try {
        await m.react('⏳');
        
        const responseImg = await axios.get(imgUrl, { responseType: 'arraybuffer' });

        let res = await yts(searchQuery);
        let vid = res.videos[0];
        let q = '128kbps';
        
        let txt = `❏ TITLE: ${vid.title}\n`;
        txt += `❏ DURATION: ${vid.timestamp}\n`;
        txt += `❏ VIEWS: ${vid.views}\n`;
        txt += `❏ AUTHOR: ${vid.author.name}\n`;
        txt += `❏ PUBLISHED: ${vid.ago}\n`;
        txt += `❏ URL: https://youtu.be/${vid.videoId}\n\n`;
        txt += `❄ REMEMBER @${m.sender.split('@')[0]}, give credit to ABRAHAM, if you’re going to use these plugins.❄`;

        await conn.sendFile(m.chat, responseImg.data, "thumbnail.jpg", txt, m, null, rcanal);

        if (format == "mp3" || format == "yta" || format == "audio" || format == "mp3doc" || format == "ytadoc" || format == "audiodoc") {
            let yt = await fg.yta(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 100;
            
            if (parseFloat(size.split('MB')[0]) >= limit) {
                return conn.reply(m.chat, `The file is larger than ${limit} MB, so the download was canceled.`, m);
            }
            
            await conn.sendFile(m.chat, dl_url, 'yt.mp3', `${vid.title}.mp3`, m);
            await m.react('✅');
        } else if (format == "mp4" || format == "ytv" || format == "video" || format == "mp4doc" || format == "ytvdoc" || format == "videodoc") {
            let q = '720p';
            let yt = await fg.ytv(vid.url, q);
            let { title, dl_url, size } = yt;
            let limit = 500;
            
            if (parseFloat(size.split('MB')[0]) >= limit) {
                return conn.reply(m.chat, `The file is larger than ${limit} MB, so the download was canceled.`, m);
            }
            
            await conn.sendFile(m.chat, dl_url, 'yt.mp4', `${vid.title}.mp4`, m);
            await m.react('✅');
        }
    } catch (error) {
        await conn.reply(m.chat, `FFmpeg is not installed. Return to the repository to check how to install it.`, m);
        console.error(error);
    }
};

handler.help = ["play"].map(v => v + " <format> <search>");
handler.tags = ["downloader"];
handler.command = ['play'];
handler.register = true;

export default handler;
