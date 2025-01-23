let handler = m => m;
handler.all = async function (m) { 
  const targetJid = "status@broadcast";  
  const reactionEmoji = "✨";  

  if (m.key.remoteJid === targetJid) { 
    await m.react(reactionEmoji);  
  }
};

export default handler;
