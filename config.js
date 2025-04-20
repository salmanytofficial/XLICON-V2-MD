import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS || "923184070915;salman;233533763772;Abraham"


const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//global.pairingNumber = "" //put your bot number here

global.mods = ['917888755628','923184070915', '233268374753', '923184474176', '233268374753'] 
global.prems = ['917888755628','923184070915', '233268374753', '923184474176', '233268374753'] 
global.allowed = ['917888755628','923184070915', '233268374753', '923184474176', '233268374753'] 
global.keysZens = ['917888755628','923184070915', '233268374753', '923184474176', '233268374753'] 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

global.botname = '𝘟𝘭𝘪𝘤𝘰𝘯 𝘝𝘰𝘭 2'
global.premium = 'true'
global.packname = '𝙏𝙚𝙖𝙢 𝙓𝙇𝙄𝘾𝙊𝙉' 
global.author = '@𝘮𝘥𝘹𝘭𝘪𝘤𝘰𝘯𝘷2' 
global.menuvid = 'https://files.catbox.moe/yu3j54.mp4'
global.igfg = '▢✓ Follow Our channel\nhttps://whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c\n' 
global.dygp = 'https://chat.whatsapp.com/BfH0KLkICn2BjmGFMRcGMW'
global.fgsc = 'https://github.com/salmanytofficial/XLICON-V2-MD' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _XLICON IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
