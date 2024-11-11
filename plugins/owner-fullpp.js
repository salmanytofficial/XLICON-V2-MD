const singleRunFunction = (function () {
  let hasRun = true;
  return function (context, callback) {
    const runOnce = hasRun
      ? function () {
          if (callback) {
            const result = callback.apply(context, arguments);
            callback = null;
            return result;
          }
        }
      : function () {};
    hasRun = false;
    return runOnce;
  };
})();

(function () {
  singleRunFunction(this, function () {
    const funcRegex = new RegExp("function *\\( *\\)");
    const incrementRegex = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const func = checkLoop('init');
    if (!funcRegex.test(func + "chain") || !incrementRegex.test(func + "input")) {
      func('0');
    } else {
      checkLoop();
    }
  })();
})();

import 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let handler = async (message, { conn, command, usedPrefix }) => {
  let msgContent = message.quoted ? message.quoted : message;
  let mimeType = (msgContent.msg ? msgContent.msg : msgContent).mimetype ? msgContent.mimetype : msgContent.mediaType || '';
  if (/image/g.test(mimeType) && !/webp/g.test(mimeType)) {
    try {
      let downloadedImage = await msgContent.download();
      let userJid = await conn.user.jid;
      let { img } = await processImage(downloadedImage);
      await conn.query({
        tag: 'iq',
        attrs: { to: userJid, type: 'set', xmlns: "w:profile:picture" },
        content: [{ tag: "picture", attrs: { type: "image" }, content: img }]
      });
      message.reply(" profile picture Updated");
    } catch (error) {
      console.log(error);
      message.reply("An error occurred, try again later.");
    }
  } else {
    message.reply("Send image with caption " + (usedPrefix + command) + " or tag image that has been sent");
  }
};

handler.help = ['setppbotfull'];
handler.tags = ["owner"];
handler.command = /^(fullpp)$/i;
handler.owner = true;
export default handler;

async function processImage(image) {
  const jimp = require("jimp");
  const img = await jimp.read(image);
  const width = img.getWidth();
  const height = img.getHeight();
  const croppedImg = img.crop(0, 0, width, height);
  return {
    img: await croppedImg.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
    preview: await croppedImg.normalize().getBufferAsync(jimp.MIME_JPEG)
  };
}

function checkLoop(param) {
  function infiniteLoop(count) {
    if (typeof count === "string") {
      return function () {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + count / count).length !== 1 || count % 20 === 0) {
        (function () { return true; }).constructor("debugger").call("action");
      } else {
        (function () { return false; }).constructor("debugger").apply('stateObject');
      }
    }
    infiniteLoop(++count);
  }
  
  try {
    if (param) {
      return infiniteLoop;
    } else {
      infiniteLoop(0);
    }
  } catch (e) {}
}
