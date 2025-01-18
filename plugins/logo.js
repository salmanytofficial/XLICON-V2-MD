import fetch from 'node-fetch'

let logos = {
    "dragonball": "https://bk9.fun/maker/ephoto-1?text={text}&url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
    "cartoon": "https://bk9.fun/maker/ephoto-1?text={text}&url=https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html",
    "viettel": "https://bk9.fun/maker/ephoto-1?text={text}&url=https://en.ephoto360.com/logo-viettel-156.html",
    "foggyglass": "https://bk9.fun/maker/ephoto-1?text={text}&url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
    "naruto": "https://bk9.fun/maker/ephoto-1?text={text}&url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
    "coffee": "https://bk9.fun/maker/ephoto-1?text={text}&url=https://en.ephoto360.com/message-coffee-245.html"
}

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return await conn.sendMessage(m.chat, { text: `Use ${usedPrefix + command} <Your Text>` })
    
    let url = logos[command].replace("{text}", encodeURIComponent(text))

    let response = await fetch(url)
    let data = await response.json()
    
    if (data.status) {
        conn.sendMessage(m.chat, { image: { url: data.BK9 } })
    } else {
        conn.sendMessage(m.chat, { text: "Sorry, there was an error generating the image." })
    }
}

handler.help = ['dragonball', 'cartoon', 'viettel', 'foggyglass', 'naruto', 'coffee']
handler.tags = ['logo']
handler.command = /^(dragonball|cartoon|viettel|foggyglass|naruto|coffee)$/i

export default handler
