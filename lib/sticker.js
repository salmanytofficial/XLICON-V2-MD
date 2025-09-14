const fetch = require('node-fetch');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
async function createSticker(img, url, packname = 'Bot', author = 'Bot') {
    let media = img;
    if (!media && url) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(await res.text());
        media = await res.buffer();
    }

    const stickerPkg = new Sticker(media, {
        pack: packname,
        author: author,
        type: StickerTypes.DEFAULT,
        quality: 80,
    });

    return await stickerPkg.toBuffer();
}

module.exports = { createSticker };
