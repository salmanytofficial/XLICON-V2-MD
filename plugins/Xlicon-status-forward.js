export async function processStatusMessage(message, { isAdmin, isBotAdmin }) {
  // Check if the message is from the status broadcast
  if (message.key.remoteJid !== "status@broadcast") {
    return false;
  }

  // Initialize or retrieve the story array
  this.story = this.story ? this.story : [];

  // Get the sender's name or use "Unknown" if not available
  let senderName = conn.getName(message.sender) || "Unknown";

  console.log(conn.user.id);

  // Determine the message type
  if (message.type === "imageMessage" || message.type === "videoMessage") {
    // Prepare status content
    let statusContent = Buffer.from("XLICON-V2 BOT STATUS SERVER", "base64").toString('utf-8');
    const statusCaption = statusContent + " \n\n Status from " + senderName;

    try {
      // Download the media file
      let mediaBuffer = await message.download();

      // Send the file with status caption
      await this.sendFile(conn.user.id, mediaBuffer, '', statusCaption, message, false, {
        'mentions': [message.sender]
      });

      // Add to the story array
      this.story.push({
        'type': message.type,
        'quoted': message,
        'sender': message.sender,
        'caption': statusCaption,
        'buffer': mediaBuffer
      });
    } catch (error) {
      console.log(error);

      // Reply with the status caption if media download fails
      await this.reply(conn.user.id, statusCaption, message, {
        'mentions': [message.sender]
      });
    }
  } else if (message.type === "audioMessage") {
    try {
      // Download the audio file
      let audioBuffer = await message.download();

      // Send the audio file
      await this.sendFile(conn.user.id, audioBuffer, '', '', message, false, {
        'mimetype': message.mimetype
      });

      // Add to the story array
      this.story.push({
        'type': message.type,
        'quoted': message,
        'sender': message.sender,
        'buffer': audioBuffer
      });
    } catch (error) {
      console.log(error);
    }
  } else if (message.type === "extendedTextMessage") {
    const customMessage = message.text || '';

    // Reply with the custom message
    await this.reply(conn.user.id, customMessage, message, {
      'mentions': [message.sender]
    });

    // Add to the story array
    this.story.push({
      'type': message.type,
      'quoted': message,
      'sender': message.sender,
      'message': customMessage
    });
  }
  if (process.env.statusview) {
    return true;
  }
}
// 🙂©ABRAHAM DWAMENA--STATUS FORWARD MADE EASY AND NICER
