async function reactToStatus(m, conn) {
  if (process.env.statusview && m.key.remoteJid === 'status@broadcast') {
    await conn.readMessages([m.key])
    await conn.react(m.key, '👍')
  }
}
