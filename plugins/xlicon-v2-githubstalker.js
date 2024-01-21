import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Please Enter Username', m)

  await m.reply('Searching...')
    let res = await fetch(`https://vihangayt.me/stalk/githubuser?q=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.avatar)).buffer()
    let hasil = `*── 「 GITHUB STALK 」 ──*

➸ *Bio*: ${json.result.bio}
➸ *Enterprise*: ${json.result.company}
➸ *Email:* ${json.result.email}
➸ *Twitter:* ${json.result.twiter_username}
➸ *Repo Public:* ${json.result.public_repo}
➸ *Gists Public:* ${json.result.public_gists}
➸ *Follower:* ${json.result.follower}
➸ *Following:* ${json.result.following}
➸ *Location:* ${json.result.location}
➸ *Type:* ${json.result.Type}
`

    conn.sendFile(m.chat, thumb, 'githubstalk.jpg', hasil, m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(githubstalk)$/i

export default handler
