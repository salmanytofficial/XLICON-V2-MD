// by mznking (https://github.com/mznking)
import axios from 'axios';
import { exec } from 'child_process';

let handler = async (m, { conn, isOwner }) => {
  if (!isOwner) {
    return conn.reply(m.chat, '❌ Only the owner can use this command.', m);
  }

  const repositoryURL = 'https://api.github.com/repos/salmanytofficial/XLICON-V2-MD';

  try {
    const command = m.text.toLowerCase();
    
    if (command === 'update') {
      await checkForUpdates(conn, repositoryURL, m);
    } else if (command === 'update now') {
      await updateBot(conn, m);
    } else {
      conn.reply(m.chat, '❌ Invalid command. Use `update` to check for updates or `update now` to update the bot.', m);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
    conn.reply(m.chat, `❌ An error occurred: ${error.message}`, m);
  }
};

async function checkForUpdates(conn, repositoryURL, m) {
  try {
    const commitHistoryResponse = await axios.get(`${repositoryURL}/commits/main`);

    if (commitHistoryResponse.status === 200) {
      const commitHistory = commitHistoryResponse.data;
      const latestCommitSHA = commitHistory[0]?.sha;

      const localBotVersion = '1.0.0'; // Replace with your logic to fetch the version dynamically

      if (latestCommitSHA !== localBotVersion) {
        conn.reply(m.chat, '🔄 Bot update available! Use `update now` to update the bot.', m);
      } else {
        conn.reply(m.chat, '✅ Bot is already up to date.', m);
      }
    } else {
      console.error('Unable to fetch commit history:', commitHistoryResponse.statusText);
      conn.reply(m.chat, '❌ Unable to fetch commit history.', m);
    }
  } catch (error) {
    throw error;
  }
}

async function updateBot(conn, m) {
  try {
    conn.reply(m.chat, '🔄 Updating bot, please wait...', m);

    exec('git pull origin main', (error, stdout, stderr) => {
      if (error) {
        console.error('Error updating bot:', error.message);
        conn.reply(m.chat, `❌ Error updating bot: ${error.message}`, m);
        return;
      }

      console.log('Bot updated successfully:', stdout);
      conn.reply(m.chat, '✅ Bot updated successfully!', m);
    });
  } catch (error) {
    throw error;
  }
}

handler.help = ['update', 'update now'];
handler.tags = ['owner'];
handler.command = ['update'];
handler.owner = true;

export default handler;
