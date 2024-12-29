import axios from 'axios';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    let result = 'HAVE FUN WATCHING ANIME'; 
    let author = 'ANIME-WEB'; 

    await conn.sendMessage(m.chat, {
        text: result,
        contextInfo: {
            externalAdReply: {
                title: "AB TECH ANIME WEBSITE",
                body: "Powered by AB TECH (XLICON V2)",
                thumbnailUrl: "https://telegra.ph/file/81199f8c1cdc906cf04d0.jpg",
                sourceUrl: "https://ab-streamer.vercel.app",
            }
        }
    }, { quoted: m });
};

handler.help = ['stream'];
handler.tags = ['main'];
handler.command = ['stream'];

export default handler;
