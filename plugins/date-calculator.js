let handler = async (message, {
    text,
    conn,
    usedPrefix,
    command
  }) => {
    try {
      // Check if a future date is provided
      if (!text) {
        throw `❓ *Please provide a future date for the countdown. Example: ${usedPrefix + command} 2023-01-01*`;
      }
  
      const targetDate = new Date(text);
      const currentDate = new Date();
  
      // Check if the provided date is in the future
      if (targetDate <= currentDate) {
        throw "⚠️ *Please provide a future date for the countdown.*";
      }
  
      // Calculate the remaining time in days
      const timeDifference = targetDate - currentDate;
      const remainingDays = Math.floor(timeDifference / 86400000);
  
      // Prepare the countdown message
      const countdownMessage = `
        ⏳ *Countdown to ${text}:*
        ${remainingDays} days remaining
      `;
  
      // Send the countdown message
      conn.reply(message.chat, countdownMessage, message);
    } catch (error) {
      console.error(error);
      message.reply(`⛔ *An error occurred: ${error}*`);
    }
  };
  
  handler.help = ["countdown"];
  handler.tags = ["utility", "time"];
  handler.command = ["countdown"];
  
  export default handler;
  