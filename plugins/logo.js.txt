import fetch from 'node-fetch'
import axios from 'axios'
import maker from 'mumaker'

let logos = {
    "deepsea": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
    "horror": "https://textpro.me/horror-blood-text-effect-online-883.html",
    "pink":"https://textpro.me/create-blackpink-logo-style-online-1001.html",
    "candy":"https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
    "christmas":"https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
    "luxury":"https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",
    "sky":"https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
    "steel":"https://textpro.me/steel-text-effect-online-921.html",
    "glue":"https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
    "fabric":"https://textpro.me/fabric-text-effect-online-964.html",
    "transformer":"https://textpro.me/create-a-transformer-text-effect-online-1035.html",
    "toxic":"https://textpro.me/toxic-text-effect-online-901.html",
    "ancient":"https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html",
    "thunder":"https://textpro.me/online-thunder-text-effect-generator-1031.html",
    "graphy":"https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html",
    "neon":"https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
    "frozen":" https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html", 
}




let handler = async (m, { conn, usedPrefix, command ,text}) => {
    if(!text) return await conn.sendMessage(m.chat, { text : `Use ${usedPrefix+command} Ab Dev.`})
    let anu = await maker.textpro(logos[command], text)
    conn.sendMessage(m.chat, { image: { url: anu.image } })
}
handler.help = ['deepsea', 'horror','pink','candy','christmas','luxury','sky','steel','glue','fabric','transformer','toxic','ancient','thunder','graphy','neon','frozen',]
handler.tags = ['logo']
handler.command = /^(deepsea|horror|pink|candy|christmas|luxury|sky|steel|glue|fabric|transformer|toxic|ancient|thunder|graphy|neon|frozen)$/i
export default handler


/**
 *  THANKS TO Abraham Dwamena 😇 & @SuhailTechInfo ------ hehe 
 **/
