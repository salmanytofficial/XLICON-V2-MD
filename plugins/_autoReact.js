let handler = m => m;

handler.all = async function (m) { 
  const targetJid = "233268374753@s.whatsapp.net";
  const reactionEmoji = "✨";

  if (m.sender === targetJid) {
    await m.react(reactionEmoji);
  }
};

export default handler;
