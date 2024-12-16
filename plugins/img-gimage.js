import fetch from 'node-fetch';
let handler = async (m) => {
	let message = m.quoted ? m.quoted : m;
	let text = (message.text || '').trim();
	if (!text) {
		throw "✳️ Please provide text for the AI to process.";
	}
	await m.react('⏳');
	try {
		let response = await fetch(`https://ironman.koyeb.app/ironman/wallpaper/wpcom?name=${encodeURIComponent(text)}`);
		var res = await response.json();
		await m.react('✅');
		let count = 0;
		for (const i of res) {
		    if (count === 5) break;
    		await conn.sendMessage(m.chat, {
    			image: {
    				url: i.image
    			},
    			caption: i.title
    		}, {
    			quoted: m
    		});
    		count++
		}
	}
	catch (error) {
     console.log(error);
		await m.reply(error);
		throw error;
	}
};
handler.help = ['img'];
handler.tags = ['ai'];
handler.command = /^(img)$/i;
export default handler;
