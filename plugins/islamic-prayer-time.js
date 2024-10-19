import axios from 'axios';

let handler = async (message, { text, conn }) => {
  try {
    if (!text) {
      throw "❓ *Please provide a city name for the prayer time information.*";
    }

    const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
      'params': {
        'city': text,
        'country': "YOUR_COUNTRY_CODE"
      }
    });

    const timings = response.data.data.timings;
    const readableDate = response.data.data.date.readable;
    const hijriMonth = response.data.data.date.hijri.month.en;
    const hijriYear = response.data.data.date.hijri.year;

    const messageContent = 
      `📅 *Islamic Date:* ${readableDate}\n` +
      `🌙 *Islamic Month:* ${hijriMonth}\n` +
      `📆 *Islamic Year:* ${hijriYear}\n\n` +
      `🤲 *Prayer Times for ${text}*\n` +
      `Fajr: ${timings.Fajr}\n` +
      `Dhuhr: ${timings.Dhuhr}\n` +
      `Asr: ${timings.Asr}\n` +
      `Maghrib: ${timings.Maghrib}\n` +
      `Isha: ${timings.Isha}\n\n` +
      `🌄 *Sunrise:* ${timings.Sunrise}\n` +
      `🌅 *Sunset:* ${timings.Sunset}\n` +
      `🌌 *Midnight:* ${timings.Midnight}`;

    conn.reply(message.chat, messageContent, message);

  } catch (error) {
    console.error(error);
    message.reply("⛔ *An error occurred while fetching the prayer time information.*");
  }
};

handler.help = ["prayertime"];
handler.tags = ['utility'];
handler.command = ['prayertime'];

export default handler;
