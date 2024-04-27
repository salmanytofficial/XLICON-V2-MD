import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) {
      throw `*_Need query._*\n*_Example:_* _${usedPrefix + command} members|user|groups_`;
    }

    let str = "";
    let cd = text.split(" ")[0];

    if (cd === "members" || cd === "member") {
      if (!m.isGroup) return m.reply("This command can only be used in a group.");
      const participants = m.metadata.participants || {};
      for (let i of participants) {
        str += `📍 ${i.id}\n`;
      }
      str ? m.reply(`*「 LIST OF GROUP MEMBER'S JID 」*\n\n` + str) : m.reply("*Request Denied!*");
    } else if (cd == "user" || cd == "pm" || cd == "pc") {
      let anu = await conn.chats.all().filter(v => v.id.endsWith('.net')).map(v => v);
      for (let i of anu) {
        str += `📍 ${i.id}\n`;
      }
      str ? m.reply(`*「 LIST OF PERSONAL CHAT JIDS 」*\n\nTotal ${anu.length} users are text in personal chat.\n\n` + str) : m.reply("*Request Denied!*");
    } else if (cd == "group" || cd == "groups" || cd == "gc") {
      n = await conn.groupFetchAllParticipating();
      const c = Object.entries(n).slice(0).map(t => t[1]);
      for (var i of c.map(t => t.id)) {
        str += `📍 ${i}\n`;
      }
      str ? m.reply(`*「 LIST OF GROUP CHAT JIDS」*\n\n` + str) : m.reply("*Request Denied!*");
    } else {
      return await m.reply(`*Use ${usedPrefix}getall pc| gc| member!*`);
    }
  } catch (e) {
    m.error(`${e}\n\nCommand getall`, e);
  }
};

handler.command = /^getall$/i;
handler.tags = ['owner'];
export default handler;

