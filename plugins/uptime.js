const process = require('process');

module.exports = {
    name: 'uptime',
    aliases: ['up'],
    description: 'Check how long the bot has been running.',

    async execute(sock, m) {
        const uptime = process.uptime(); 

        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const formattedTime = `${hours}h ${minutes}m ${seconds}s`;

        await m.reply(`⏱️ Bot Uptime: ${formattedTime}`);
    }
};
