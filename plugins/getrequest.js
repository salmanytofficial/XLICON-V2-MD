let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!m.isGroup) return conn.reply(m.chat, `This command can only be used in groups.`, m);
  if (!m.isBotAdmin) return conn.reply(m.chat, `The bot must be an admin to execute this command.`, m);
  if (!m.isAdmin) return conn.reply(m.chat, `You must be an admin to use this command.`, m);

  if (command === 'getjoinrequest') {
    const joinRequests = await conn.groupRequestParticipantsList(m.chat);
    if (!joinRequests || !joinRequests.length) {
      return conn.reply(m.chat, `✳️ No pending join requests. ✅`, m);
    }

    let replyMessage = `✳️ Join Request List:\n`;
    joinRequests.forEach((request, index) => {
      const { jid, request_method, request_time } = request;
      const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
      replyMessage += `\n*No.: ${index + 1} Request Details: 👇*`;
      replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
      replyMessage += `\n🧪 *Method:* ${request_method}`;
      replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
    });

    conn.reply(m.chat, replyMessage, m);
  }

  if (command === 'accept') {
    if (!text) return conn.reply(m.chat, `✳️ Please specify the index of the request to accept.`, m);

    const joinRequests = await conn.groupRequestParticipantsList(m.chat);
    const requestIndex = parseInt(text) - 1;
    if (isNaN(requestIndex) || requestIndex < 0 || requestIndex >= joinRequests.length) {
      return conn.reply(m.chat, `✳️ Please provide a valid index to accept the request.`, m);
    }

    const acceptedRequest = joinRequests[requestIndex];
    try {
      await conn.groupParticipantsUpdate(m.chat, [acceptedRequest.jid], 'add');
      conn.reply(m.chat, `✅ Join request from ${acceptedRequest.jid} accepted.`, m);
    } catch (e) {
      console.log(e);
      return conn.reply(m.chat, `✳️ Error: Unable to accept the join request.`, m);
    }
  }
};

handler.help = ['getjoinrequest', 'accept <index>'];
handler.tags = ['group'];
handler.command = ['getjoinrequest', 'accept'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
