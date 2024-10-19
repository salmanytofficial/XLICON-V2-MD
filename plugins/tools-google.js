import fetch from "node-fetch";
import googleIt from "google-it";

const handler = async (m, { conn, command, text, args, usedPrefix }) => {
    if (!text) throw `Provide a text to search. Example: *${usedPrefix + command}* Xlicon-v2 bot`;

    conn.gogleit = conn.gogleit ? conn.gogleit : {};
    await conn.reply(m.chat, "🔍 Searching...", m);

    const result = await googleresult(text);
    const infoText = `✦ ──『 *GOOGLE SEARCH* 』── ⚝ \n\n[ ⭐ Reply with the number of the desired search result to get the screenshot of the website ]. \n\n`;

    const orderedLinks = result.allLinks.map((link, index) => {
        const sectionNumber = index + 1;
        const { title } = link;
        return `*${sectionNumber}.* ${title}`;
    });

    const orderedLinksText = orderedLinks.join("\n\n");
    const fullText = `${infoText}\n\n${orderedLinksText}`;

    const { key } = await conn.reply(m.chat, fullText, m);

    conn.gogleit[m.sender] = {
        result,
        key,
        timeout: setTimeout(() => {
            conn.sendMessage(m.chat, { delete: key });
            delete conn.gogleit[m.sender];
        }, 150 * 1000),
    };
};

handler.before = async (m, { conn }) => {
    conn.gogleit = conn.gogleit ? conn.gogleit : {};
    if (!conn.gogleit[m.sender]) return;

    const { result, key, timeout } = conn.gogleit[m.sender];

    if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
    const choice = m.text.trim();
    const inputNumber = Number(choice);

    if (inputNumber >= 1 && inputNumber <= result.allLinks.length) {
        const selectedUrl = result.allLinks[inputNumber - 1].url;
        
        try {
            const response = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=${selectedUrl}`);
            const buffer = await response.buffer();

            await conn.sendFile(m.chat, buffer, "google.jpg", "Here is your result!", m);
        } catch (error) {
            console.error("Error fetching screenshot:", error);
            m.reply("⛔ An error occurred while taking a screenshot.");
        }

    } else {
        m.reply("Invalid number. Please select a number between 1 and " + result.allLinks.length);
    }
};

handler.help = ["google"];
handler.tags = ["utility"];
handler.command = /^(google)$/i;
handler.limit = true;
export default handler;

async function googleresult(query) {
    try {
        const res = await googleIt({ query });
        if (!res.length) return { allLinks: [] };

        const allLinks = res.map(item => ({
            title: item.title,
            url: item.link,
        }));
        
        return { allLinks };

    } catch (error) {
        return { allLinks: [], error: "Error: " + error.message };
    }
}
