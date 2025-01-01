import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix: _p }) => {
    let img = "https://avatars.githubusercontent.com/u/120536940?v=4";
    let caption = "*AND BULD*";
    await conn.sendFile(m.chat, img, 'image.jpg', caption, m);
};

handler.customPrefix = /^(Arise)$/i;
handler.command = new RegExp();

export default handler;
