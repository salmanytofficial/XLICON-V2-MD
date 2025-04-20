module.exports = {
  apps: [
    {
      name: 'XLICON-BOT',
      script: 'index.js',
      interpreter: 'node',
      watch: false,  // Disable watch
      ignore_watch: ['node_modules'],
    },
  ],
};
