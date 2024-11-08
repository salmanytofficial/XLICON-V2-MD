import fetch from 'node-fetch';
import yts from 'yt-search';
import axios from 'axios';
import fs from 'fs';

const handler = async (m, { command, usedPrefix, conn, text }) => {
    if (!text) throw `Please provide a song name or URL.\nExample: *${usedPrefix + command} Billie Eilish - Bellyache*`;

    try {
        if (command === 'play') {
            conn.reply(m.chat, 'Please wait while we fetch the audio...', m, {
                contextInfo: {
                    externalAdReply: {
                        mediaUrl: null,
                        mediaType: 1,
                        description: null,
                        title: 'XLICON-MD', 
                        body: 'Super Bot WhatsApp',
                        previewType: 0,
                        thumbnail: fs.readFileSync("./XLICON.jpg"), 
                        sourceUrl: 'https://github.com/salmanytofficial/XLICON-V2-MD'
                    }
                }
            });

            let res = await fetch(`https://violetics.pw/api/media/youtube-play?apikey=beta&query=${text}`);
            let json = await res.json();

            conn.sendFile(m.chat, json.result.url, 'audio.mp3', null, m, false, { mimetype: 'audio/mp4' });
        }

        if (command === 'play1') {
            conn.reply(m.chat, 'Please wait while we fetch the video...', m, {
                contextInfo: {
                    externalAdReply: {
                        mediaUrl: null,
                        mediaType: 1,
                        description: null,
                        title: 'XLICON-MD',
                        body: 'Super Bot WhatsApp',
                        previewType: 0,
                        thumbnail: fs.readFileSync("./XLICON.jpg"), 
                        sourceUrl: 'https://github.com/salmanytofficial/XLICON-V2-MD'
                    }
                }
            });

            let res = await fetch(`https://violetics.pw/api/media/youtube-play?apikey=beta&query=${text}`);
            let json = await res.json();

            conn.sendFile(m.chat, json.result.url, 'video.mp4', 'Here is the video!', m);
        }
    } catch (e) {
        await conn.reply(m.chat, 'There was an error fetching the media. Please try again later.', m);
        console.log(e);
    }
};

handler.help = ['play', 'play1'].map(v => v + ' <song name or URL>');
handler.tags = ['downloader'];
handler.command = ['play', 'play1'];

export default handler;
