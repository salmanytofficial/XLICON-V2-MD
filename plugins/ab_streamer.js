import axios from 'axios';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    // Define 'result' and 'author' with static values
    let result = 'HAVE FUN WATCHING ANIME'; // Replace with your actual static message
    let author = 'ANIME-WEB'; // Replace with the actual author name or relevant string

    await conn.sendButton(
        m.chat,
        result,
        author,
        'https://telegra.ph/file/81199f8c1cdc906cf04d0.jpg',
        [['GROUPS', `${usedPrefix}groups`]],
        null,
        [['STREAM ANIME', 'https://ab-streamer.vercel.app']],
        m
    );
};

handler.help = ['stream'];
handler.tags = ['main'];
handler.command = ['stream'];

export default handler;
