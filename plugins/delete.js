let handler = async (m, { conn, isAdmin, isBotAdmin, command, args }) => {
    if (!m.isGroup) return; 
    if (!isAdmin) return m.reply('You must be an admin to use this command.');
    if (!isBotAdmin) return m.reply('I must be an admin to enable this feature.');

    let chat = global.db.data.chats[m.chat];
    if (!chat) chat = global.db.data.chats[m.chat] = {};

    if (!args || !args[0]) {
        return m.reply('Please specify "on" or "off". Example: #antilinkdel on');
    }

    let option = args[0].toLowerCase();
    if (option !== 'on' && option !== 'off') {
        return m.reply('Invalid option. Use "on" or "off". Example: #antilinkdel on');
    }

    let switchs = option === 'on';
    chat.antilink = switchs;

    m.reply(`Anti-link deletion has been *${switchs ? 'enabled' : 'disabled'}*`);
};

handler.before = async (m, { conn, isAdmin, isBotAdmin }) => {
    if (!m.isGroup) return;
    if (isAdmin || !isBotAdmin) return;

    let chat = global.db.data.chats[m.chat];
    if (!chat || !chat.antilink) return;

    const linkPattern = /https?:\/\/|www\./i;
    if (linkPattern.test(m.text)) {
        await conn.sendMessage(m.chat, {
            text: `_Links are not allowed_`,
            mentions: [m.sender],
        });

        if (m.key) {
            await conn.sendMessage(m.chat, { delete: m.key });
        }
    }
};

handler.help = ['antilinkdel'];
handler.tags = ['group'];
handler.command = /^antilinkdel$/i; 
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
