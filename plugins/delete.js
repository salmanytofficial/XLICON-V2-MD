let handler = async (m, { conn, isAdmin, isBotAdmin, command }) => {
    if (!isAdmin) return;
    if (!isBotAdmin) return m.reply('not_admin');
    let chat = global.db.data.chats[m.chat];
    let switchs = /on/i.test(command);
    if (!chat) chat = global.db.data.chats[m.chat] = {};
    chat.antilink = switchs;
    m.reply(`Anti-dele been *${switchs ? 'enabled' : 'disabled'}*`);
};
handler.before = async (m, { conn, isAdmin, isBotAdmin }) => {
    if (!m.isGroup || isAdmin || !isBotAdmin) return;
    let chat = global.db.data.chats[m.chat];
    if (!chat || !chat.antilink) return;
    const ex = /https?:\/\/|www\./i;
      if (ex.test(m.text)) {
        await conn.sendMessage(m.chat, {
            text: `_Links not_allowed_`,
            mentions: [m.sender],
        });
        await conn.sendMessage(m.chat, { delete: m.key });
    }
};
handler.help = ['antilinkdel'];
handler.tags = ['group'];
handler.command = /^(antilinkdel|antilinkdel\s(on|off))$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
