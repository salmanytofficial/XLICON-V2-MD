import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js';

let handler = async (m, { conn, text }) => {
    if (!text) {
        throw `*Please provide a song name or Spotify link.*`;
    }

    await displayLoadingScreen(conn, m.chat);

    const defaultThumbnail = 'https://wallpapercave.com/wp/wp7932387.jpg';
    const isSpotifyLink = text.startsWith('https://open.spotify.com/');
    let query, apiUrl;

    try {
        if (isSpotifyLink) {
            apiUrl = `https://delirius-apiofc.vercel.app/download/spotifydlv3?url=${text}`;
            const response = await fetch(apiUrl);
            const json = await response.json();

            if (!json.status) {
                throw `*Error: Unable to download the song. Please check the link and try again.*`;
            }
            const { title, artist, album, duration, image, url } = json.data;
            let audioMessage = {
                audio: { url: url },
                mimetype: 'audio/mpeg',
                ptt: false,
                fileName: `${title} - ${artist}.mp3`,
                contextInfo: {
                    externalAdReply: {
                        title: `Now Playing: ${title}`,
                        body: `Album: ${album} | Duration: ${duration}`,
                        thumbnailUrl: image || defaultThumbnail,
                        sourceUrl: text,
                        renderLargerThumbnail: true,
                    },
                },
            };

            await conn.sendMessage(m.chat, audioMessage, { quoted: m });
        } else {
            query = encodeURIComponent(text);
            apiUrl = `https://delirius-apiofc.vercel.app/search/spotify?q=${query}`;
            const response = await fetch(apiUrl);
            const json = await response.json();

            if (!json.status || !json.data || json.data.length === 0) {
                throw `*No results found for "${text}". Please try again.*`;
            }
            const results = json.data;
            let searchResults = `*Search Results for "${text}":*\n\n`;

            results.forEach((song, i) => {
                searchResults += `${i + 1}. *${song.title}* by *${song.artist}*\n   Album: ${song.album}\n   Duration: ${song.duration} | Popularity: ${song.popularity}\n   [Link](${song.url})\n\n`;
            });
            searchResults += `\n*Reply with the number of the song you want to download.*`;
            await conn.sendMessage(m.chat, { text: searchResults }, { quoted: m });
            conn.on('message-new', async (msg) => {
                const selection = parseInt(msg.body);
                if (selection > 0 && selection <= results.length) {
                    const selectedSong = results[selection - 1];
                    apiUrl = `https://delirius-apiofc.vercel.app/download/spotifydlv3?url=${selectedSong.url}`;
                    const downloadResponse = await fetch(apiUrl);
                    const downloadJson = await downloadResponse.json();

                    if (!downloadJson.status) {
                        throw `*Error: Unable to download the song. Please try again later.*`;
                    }
                    const { title, artist, image, url } = downloadJson.data;

                    let audioMessage = {
                        audio: { url: url },
                        mimetype: 'audio/mpeg',
                        ptt: false,
                        fileName: `${title} - ${artist}.mp3`,
                        contextInfo: {
                            externalAdReply: {
                                title: `Now Playing: ${title}`,
                                body: `Artist: ${artist}`,
                                thumbnailUrl: image || defaultThumbnail,
                                sourceUrl: selectedSong.url,
                                renderLargerThumbnail: true,
                            },
                        },
                    };

                    await conn.sendMessage(m.chat, audioMessage, { quoted: msg });
                } else {
                    await conn.sendMessage(m.chat, { text: `*Invalid selection. Please try again.*` }, { quoted: msg });
                }
            });
        }
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { text: `*Error: ${error.message || error}*` }, { quoted: m });
    }
};

handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify|song)$/i;

export default handler;
