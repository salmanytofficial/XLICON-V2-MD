function hi() {
  console.log("Hello World!");
}

import 'child_process';
import 'performance-now';

let handler = async ({ message, options: { conn } }) => {
  let loadingMessage = await conn.sendMessage(message.chat, {
    text: "*Loading...*"
  });

  let heartSymbols = [
    '🤍', '💙', '❤️', '🧡', '💛', '💚', '💜', '🤎', '🖤', '💞', '💗', '💖', '💘', '💝', '💓', '💕', '💔', "_CREATED BY XLICON V2_"
  ];

  let delay = 250;

  for (let heart of heartSymbols) {
    setTimeout(async () => {
      await conn.relayMessage(message.chat, {
        protocolMessage: {
          key: loadingMessage.key,
          type: 14,
          editedMessage: {
            conversation: heart
          }
        }
      }, {});
    }, delay);
    delay += 250;
  }
};

handler.help = ['love'];
handler.tags = ["fun"];
handler.command = ["love"];

export default handler;
