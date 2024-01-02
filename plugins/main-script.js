import axios from 'axios';
import { promises } from 'fs';
import { join } from 'path';

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/salmanytofficial/XLICON-V2-MD';

  try {
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      const info_rep = `
📂 *REPO IS UNDER DEVELOPMENT*

- Stars: ${repoData.stargazers_count}
- Forks: ${repoData.forks}
- Author: ${repoData.owner.login}
- Created at: ${repoData.created_at}
- Last Updated: ${repoData.updated_at}
- Repo: ${repoData.html_url}
- [XLICON GC]: https://chat.whatsapp.com/C4ivwZKuh5bLJkqfYNPQsk
`;

      await conn.sendMessage(m.chat, info_rep 'text', { quoted: m });
    } else {
      await conn.reply(m.chat, 'Unable to fetch the XLICON-V2 repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;
  
