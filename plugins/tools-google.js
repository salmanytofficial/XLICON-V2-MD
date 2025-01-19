import google from 'google-it';
import axios from 'axios';

let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return m.reply(`[ ⭐ what are you searching for  ]. \n\n hey ${usedPrefix + command} cats`);
  m.react("⌛");

  try {
    const res = await fetch(`https://api.example.com/search/googlesearch?query=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (data.status && data.data && data.data.length > 0) {
      let resultText = `🔍 *✦ ──『 *GOOGLE SEARCH* 』── ⚝ \n\n Results for:* ${text}\n\n`;
      for (let result of data.data.slice(0, 5)) { 
        resultText += `*${result.title}*\n_${result.url}_\n_${result.description}_\nWebsite Link: _${result.website}_\n\n─────────────────\n\n`;
      }

      const screenshot = `https://image.thum.io/get/fullpage/https://google.com/search?q=${encodeURIComponent(text)}`;
      conn.sendFile(m.chat, screenshot, 'result.png', resultText, m, false);
      m.react("✅");
      handler.limit = 1;
    }
  } catch (error) {
    try {
      const url = 'https://google.com/search?q=' + encodeURIComponent(text);
      google({ query: text }).then(results => {
        let resultText = `🔍 *Search Results for:* ${text}\n\n*${url}*\n\n`;
        for (let g of results.slice(0, 5)) { 
          resultText += `_${g.title}_\n_${g.link}_\n_${g.snippet}_\nWebsite Link: _${g.link}_\n\n─────────────────\n\n`;
        }
        const screenshot = `https://image.thum.io/get/fullpage/${url}`;
        conn.sendFile(m.chat, screenshot, 'error.png', resultText, m, false);
      });
      m.react("✅");
      handler.limit = 1;
    } catch (e) {
      handler.limit = 0;
      console.error(e);
      m.react("❌");
    }
  }
};

handler.help = ['google', 'googlef'].map(v => v + ' <search term>');
handler.tags = ['study'];
handler.command = /^googlef?$/i;
handler.register = false;
export default handler; 
//fuck i was asking :) 
