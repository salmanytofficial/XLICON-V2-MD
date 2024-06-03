import axios from 'axios';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    // Define 'result' and 'author' with static values
    let result = 'NEED HELP CLICK MENU BUTTON TO DISPLAY MENU'; // Replace with your actual static message
    let author = 'XLICON-V2'; // Replace with the actual author name or relevant string

    await conn.sendButton(
        m.chat,
        result,
        author,
        'https://telegra.ph/file/325630f66abc968eda8e2.mp4',
        [['Menu', `${usedPrefix}menu`]],
        null,
        [['Fork repo', 'https://github.com/salmanytofficial/XLICON-V2-MD']],
        m
    );
};

handler.help = ['bmenu'];
handler.tags = ['main'];
handler.command = ['bmenu'];

export default handler;
