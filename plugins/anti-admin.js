let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.isGroup) return m.reply("This command can only be used in groups.");
  if (!m.isBotAdmin) return m.reply("I need to be an admin to perform this action.");
  
  let chat = global.db.data.chats[m.chat];
  
  // Loop through each mentioned JID
  for (let participant of m.mentionedJidList) {
    // Check if the mentioned participant is an admin and not the owner
    if (m.isGroup && chat.isAdmins.includes(participant) && !chat.isOwner.includes(participant)) {
      await conn.groupDemoteAdmin(m.chat, [participant]);
      m.reply(`You can't demote an admin! You have been demoted instead.`);
      // Delete the message that attempted to demote an admin
      await conn.sendMessage(m.chat, { delete: m.message.key });
      break; // Exit the loop after demoting one participant
    }
  }
};

handler.help = ['antiadmin'];
handler.tags = ['group'];
handler.command = /^(antiadmin)$/i;
handler.admin = true;
handler.botAdmin = true;

export default handler;
