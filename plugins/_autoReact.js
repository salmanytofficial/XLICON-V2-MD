let handler = m => m;

handler.all = async function (m) { 
  const targetJid = "233268374753@s.whatsapp.net";
  const reactionEmoji = "✨";

  try {
    if (m.sender === targetJid) {
      await conn.sendMessage(m.chat, { react: { text: reactionEmoji, key: m.key } });
    }
  } catch (err) {
    console.error("Failed to send reaction:", err);
  }
};

export default handler;
