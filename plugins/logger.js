module.exports = {
    name: 'logger',
    description: 'Logs all incoming messages when activated',
    aliases: ['log'],

    active: false, 

    async execute(sock, m, args) {
        this.active = !this.active;
        const status = this.active ? 'enabled' : 'disabled';
        await m.send(`Message logger ${status}`, { quoted: m });

        if (!this.active) return;
        sock.ev.on('messages.upsert', async (upsert) => {
            for (const msg of upsert.messages) {
                if (!msg.message) continue;

                console.log('--- New Message ---');
                console.log('From (jid):', msg.key.remoteJid);
                console.log('Message ID:', msg.key.id);
                console.log('Is from bot:', msg.key.fromMe);
                console.log('Timestamp:', msg.messageTimestamp);
                console.log('Type:', Object.keys(msg.message)[0]);
                console.log('Full message object:', msg.message);
                console.log('-------------------\n');
            }
        });
    }
};
