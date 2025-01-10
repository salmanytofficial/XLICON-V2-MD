let handler = async (m, { conn, participants, isBotAdmin, text, command }) => {
    if (!m.isGroup || !isBotAdmin) return;

    let chat = global.db.data.chats[m.chat];
    if (!chat) chat = global.db.data.chats[m.chat] = {};
    if (/^antidemote$/i.test(command)) {
        if (!text) {
            return conn.reply(m.chat, `Use the command with *on* or *off*\nExample: #antidemote on`, m);
        }

        let enable = /on/i.test(text);
        chat.antidemote = enable;
        return conn.reply(m.chat, `✅ Anti-Demote has been *${enable ? 'enabled' : 'disabled'}*.`, m);
    }
    if (!chat.antidemote) return;
    if (m.messageStubType === 21) {
        const demoter = m.sender;
        const demotedJid = m.messageStubParameters[0] + '@s.whatsapp.net';

        const botNumber = conn.user.jid;
        const groupAdmins = participants
            .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
            .map(p => p.id);
        const groupOwner = participants.find(p => p.admin === 'superadmin')?.id;

        const isProtected =
            groupAdmins.includes(demotedJid) || 
            demotedJid === botNumber || 
            demotedJid === groupOwner;

        if (isProtected) {
            try {
                await conn.groupParticipantsUpdate(m.chat, [demotedJid], 'promote');
                await conn.groupParticipantsUpdate(m.chat, [demoter], 'demote');

                conn.reply(m.chat, `🚫 Anti-Demote Activated!\n\nUser *@${demoter.split('@')[0]}* tried to demote a protected user and has been demoted instead.`, m, {
                    mentions: [demoter]
                });
            } catch (e) {
                console.error(e); 
                conn.reply(m.chat, '❌ Failed to enforce Anti-Demote. Please try again.', m);
            }
        }
    }

    if (m.quoted && m.quoted.sender) {
        const quotedUser = m.quoted.sender;
        try {
            await conn.groupParticipantsUpdate(m.chat, [quotedUser], 'promote');
            m.reply(`✅ User *@${quotedUser.split('@')[0]}* has been promoted from quoted message.`);
        } catch (e) {
            console.error(e); 
            m.reply('❌ Failed to promote user from quoted message.');
        }
    }
};

handler.help = ['antidemote'];
handler.tags = ['group'];
handler.command = /^antidemote$/i;

handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
