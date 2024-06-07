import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import { tiktok } from '@xct007/frieren-scraper';
import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
import { tiktokdl } from '@bochilteam/scraper';

const CFROSAPI = global.APIs.CFROSAPI;

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `_*Xlicon TIKTOK DL*_\n\n*_Paste a TikTok link._*\n\n*_Example:_* _${usedPrefix + command} Url here_`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `_*Xlicon TIKTOK DL*_\n\n*_Enter a TikTok link._*\n\n*_Example:_* _${usedPrefix + command} Url here_`;

  try {
    await m.react('⏳'); // Assuming '⏳' is the wait emoji
    const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${args[0]}`);
    const desc1n = `*_|©Xlicon-MD-V2|_*`;
    await conn.sendMessage(m.chat, { video: dataFn.data, caption: desc1n }, { quoted: m });
    await m.react('✅'); // Assuming '✅' is the done emoji
  } catch (err1) {
    try {
      const dataF = await tiktok.v1(args[0]);
      const desc1 = `*_Here is your requested video_*`;
      await conn.sendMessage(m.chat, { video: { url: dataF.play }, caption: desc1 }, { quoted: m });
      await m.react('✅');
    } catch (err2) {
      try {
        const tTiktok = await tiktokdlF(args[0]);
        const desc2 = `*_Here is your requested video_*`;
        await conn.sendMessage(m.chat, { video: { url: tTiktok.video }, caption: desc2 }, { quoted: m });
        await m.react('✅');
      } catch (err3) {
        try {
          const p = await fg.tiktok(args[0]);
          const te = `*_Here is your requested video_*`;
          await conn.sendMessage(m.chat, { video: { url: p.nowm }, caption: te }, { quoted: m });
          await m.react('✅');
        } catch (err4) {
          try {
            const { author: { nickname }, video, description } = await tiktokdl(args[0]);
            const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
            const cap = `*_Here is your requested video_*`;
            await conn.sendMessage(m.chat, { video: { url: url }, caption: cap }, { quoted: m });
            await m.react('✅');
          } catch (err5) {
            await m.react('❌'); // Assuming '❌' is the error emoji
            throw `*_An error occurred. Please try again later._*`;
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
  if (!/tiktok/.test(url)) return `_*Xlicon TIKTOK DL*_\n\n*_Paste a TikTok link._*\n\n*_Example:_* _${usedPrefix + command} Url here_`;
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr('value');
  const param = { url: url, _token: token };
  const { data } = await axios.request('https://tikdown.org/getAjax?', {
    method: 'post',
    data: new URLSearchParams(Object.entries(param)),
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'
    }
  });
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {
      status: true,
      thumbnail: getdata('img').attr('src'),
      video: getdata('div.download-links > div:nth-child(1) > a').attr('href'),
      audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')
    };
  } else {
    return { status: false };
  }
}
