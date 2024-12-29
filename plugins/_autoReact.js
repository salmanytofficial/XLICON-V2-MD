let handler = async (m, { conn }) => {
  const targetJid = "233268374753@s.whatsapp.net";
  const reactionEmoji = "✨";

  if (m.sender === targetJid) {
    await conn.sendMessage(m.chat, { react: { text: reactionEmoji, key: m.key } });
  }
};

handler.all = true;
export default handler;
