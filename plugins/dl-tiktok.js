import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const CFROSAPI = global.APIs.CFROSAPI;
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!text) throw `_*XLICON TIKTOK DL*_\n\n*_Paste a tiktok link._*\n\n*_Example:_* _${usedPrefix + command} Url here_`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `_*XLICON TIKTOK DL*_\n\n*_Enter a TikTok link._*\n\n*_Example:_* _${usedPrefix + command} Url here_`;

  // let buttons = [{ buttonText: { displayText: '♫ 𝙰𝚄𝙳𝙸𝙾 ♫' }, buttonId: `${usedPrefix}tomp3` }]
  try {
    m.react(rwait)
    const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${args[0]}`);
    const desc1n = `*_|©XLICON-MD-V2|_*`;
    await conn.sendMessage(m.chat, {video: dataFn.data, caption: desc1n}, {quoted: m});
 m.react(done)
  } catch (ee1) {

  try {
    //const aa = {quoted: m, userJid: conn.user.jid};
    //const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: 'XLICON-𝘉𝘖𝘛-𝘔𝘋', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/salmanytofficial/XLICON-V2-MD'}, mentionedJid: [m.sender]}}}, aa);
    //await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataF = await tiktok.v1(args[0]);
    // let desc1 =  `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${dataF.nickname || 'Indefinido'}`
    const desc1 = `*_Here is your requested video_*`;
    await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: desc1}, {quoted: m});
  m.react(done)
  } catch (e1) {
    try {
      const tTiktok = await tiktokdlF(args[0]);
      // let desc2 = `🔗 *Url:* ${tTiktok.video}`
      const desc2 = `*_Here is your requested video_*`;
      await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: desc2}, {quoted: m});
    m.react(done)
    } catch (e2) {
      try {
        const p = await fg.tiktok(args[0]);
        // let te = `*𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${p.author || 'Indefinido'}`
        const te = `*_Here is your requested video_*`;
        await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: te}, {quoted: m});
    m.react(done)
      } catch (e3) {
        try {
          const {author: {nickname}, video, description} = await tiktokdl(args[0]);
          const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
          // let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
          const cap = `*_Here is your requested video_*`;
          await conn.sendMessage(m.chat, {video: {url: url}, caption: cap}, {quoted: m});
      m.react(done)
        } catch {
          throw `*_An or occurred. Please try again later._*`;
          }
        }
      }
    }
  }
};
handler.command = /^(tiktok|tk|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i;
handler.tags = ['downloader'];
export default handler;

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return `_*XLICON TIKTOK DL*_\n\n*_Paste a tiktok link._*\n\n*_Example:_* _${usedPrefix + command} Url here_`;
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}
