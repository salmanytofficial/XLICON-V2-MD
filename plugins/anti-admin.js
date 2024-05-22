let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.isGroup) return m.reply("This command can only be used in groups.");
  if (!isBotAdmin) return m.reply("I need to be an admin to perform this action.");
  let chat = global.db.data.chats[m.chat];
  if (m.isGroup && m.participant.isAdmin && m.mentionedJidList.includes(m.participant) && !m.participant.isOwner) {
    await conn.groupDemoteAdmin(m.chat, m.participant);
    m.reply(`You can't demote an admin! You have been demoted instead.`);
    // Delete the message that attempted to demote an admin @by ABRAHAM DWAMENA
    conn.sendMessage(m.chat, { delete: m.message.key });
  }
};

handler.help = ['antiadmin']
handler.tags = ['group']
handler.command = /^(antiadmin)$/i
handler.admin = true
handler.botAdmin = true

export default handler
