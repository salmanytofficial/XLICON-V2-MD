let handler = async (m, { conn }) => {
  const targetNumber = "233268374753";
  const reactionEmoji = "✨";

  let senderNumber = m.sender.replace(/[^0-9]/g, "");

  if (senderNumber === targetNumber) {
    await conn.sendMessage(m.chat, { react: { text: reactionEmoji, key: m.key } });
  }
};

handler.all = true;
export default handler;
