let handler = async (m, { conn, participants, isBotAdmin }) => {
    if (!m.isGroup || !isBotAdmin) return;

    let chat = global.db.data.chats[m.chat];
    if (!chat || !chat.antidemote) return;

    if (m.messageStubType === 21) {
        const demoter = m.sender;
        const demoted = m.messageStubParameters[0] + '@s.whatsapp.net';

        const botNumber = conn.user.jid;
        const groupAdmins = participants
            .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
            .map(p => p.id);

        const isProtected = groupAdmins.includes(demoted) || demoted === botNumber;

        if (isProtected) {
            try {
                await conn.groupParticipantsUpdate(m.chat, [demoted], 'promote');
                await conn.groupParticipantsUpdate(m.chat, [demoter], 'demote');

                conn.reply(m.chat, `🚫 Anti-Demote Activated!\n\nUser *@${demoter.split('@')[0]}* tried to demote a protected user and has been demoted instead.`, m, {
                    mentions: [demoter]
                });
            } catch (e) {
                conn.reply(m.chat, '❌ Failed to enforce Anti-Demote.', m);
            }
        }
    }
};

handler.help = ['antidemote'];
handler.tags = ['group'];
handler.command = /^antidemote$/i;

handler.group = true;
handler.admin = true;
handler.botAdmin = true;

handler.before = handler;

export default handler;
