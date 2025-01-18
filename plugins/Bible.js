import fetch from 'node-fetch';
import { translate } from '@vitalets/google-translate-api';

const BASE_URL = 'https://bible-api.com';

let bibleChapterHandler = async (m, { conn }) => {
  try {
    
    let chapterInput = m.text.split(' ').slice(1).join('').trim();

    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: -bible john 3:16`);
    }

  
    chapterInput = encodeURIComponent(chapterInput);

  
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`);
    
    if (!chapterRes.ok) {
      throw new Error(`Unable to fetch the chapter at the moment. Please check the input. Example: -bible john 3:16`);
    }

    let chapterData = await chapterRes.json();

    
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true });
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true });

   
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter:* ${chapterData.reference}\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}
    `.trim();

    
    await conn.sendMessage(m.chat, {
      text: bibleChapter,
      contextInfo: {
        externalAdReply: {
          title: "The Holy Bible",
          body: `Chapter: ${chapterData.reference}`,
          thumbnailUrl: "https://th.bing.com/th/id/R.95031b4b6f4e83a8b15b4310ed1b5f0d?rik=%2byvWX6sVPZB7yg&pid=ImgRaw&r=0", 
          sourceUrl: "https://bible-api.com", 
        }
      }
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
};

bibleChapterHandler.help = ['bible chapter_number|chapter_name'];
bibleChapterHandler.tags = ['religion'];
bibleChapterHandler.command = ['bible', 'chapter'];

export default bibleChapterHandler;
