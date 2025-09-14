module.exports = {
    name: 'tagme',
    aliases: ['tag'],
    description: 'Tag yourself using your WhatsApp JID.',

    async execute(sock, m) {
        const jid = m.sender;
        await sock.sendMessage(m.from, {
            text: `@${jid.split('@')[0]}`,
            mentions: [jid]
        });
    }
};
