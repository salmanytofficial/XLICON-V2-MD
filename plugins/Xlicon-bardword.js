const badWords = /(gandu|maderchod|bhosdike|bhosda|laud?a|chut?iya|maa ki chut|behenchod|behen ki chut|tatto ke saudagar|machar ki jhant|jhant? ka baal|Rand?i ka aulad|chuchi|booob?ie?s|to?lo?l|idiot|nigga|fuck|sex|dick|bitch|tits|bastard|asshole|a[su,w,yu])/i;

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    const hasBadWord = badWords.exec(m.text)

    if (chat.antiToxic && hasBadWord) {
        if (isBotAdmin) {
            // Remove the participant from the group
            global.db.data.users[m.sender].warn += 1
            await this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
            await this.reply(m.chat, '⛔ *Bad words are forbidden by group admins.*', m)
        } else {
            await this.reply(m.chat, '😬 *I\'m not an admin here!*', m)
        }
    }
    return !0
    }
