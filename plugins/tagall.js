module.exports = {
    name: 'tagall',
    aliases: ['everyone'],
    description: 'Tag everyone in the group',

    async execute(sock, m) {
        if (!m.isGroup) {
            return await sock.sendMessage(m.from, { text: 'This command can only be used in groups!' });
        }

        const groupMetadata = await sock.groupMetadata(m.from);
        const participants = groupMetadata.participants.map(p => p.id);

        const mentionText = participants.map(p => `@${p.split('@')[0]}`).join(' ');

        await sock.sendMessage(m.from, {
            text: mentionText,
            mentions: participants
        });
    }
};
