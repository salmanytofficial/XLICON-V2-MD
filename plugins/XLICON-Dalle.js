import fetch from 'node-fetch';
let handler = async (m) => {
	let message = m.quoted ? m.quoted : m;
	let text = (message.text || '').trim();
	if (!text) {
		throw "✳️ Please provide text for the AI to process.";
	}
	await m.react('⏳');
	try {
		let response = await fetch(`https://bk9.fun/ai/aiimg?q=${encodeURIComponent(text)}`);
		var res = await response.json();
		await m.react('✅');
		var image = res.BK9;
		await conn.sendMessage(m.chat, {
			image: {
				url: image
			}
		}, {
			quoted: m
		});
	}
	catch (error) {
		await m.react('❌');
		throw error;
	}
};
handler.help = ['dalle'];
handler.tags = ['ai'];
handler.command = /^(dalle)$/i;
export default handler;
