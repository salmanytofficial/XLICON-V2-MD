import fetch from 'node-fetch';

let handler = async (message, {
  conn: connection,
  args: arguments,
  usedPrefix: prefix,
  command: cmd,
  text: inputText
}) => {
  if (!inputText && !(message.quoted && message.quoted.text)) {
    throw "Please provide some text or quote a message to get a response.";
  }
  if (!inputText && message.quoted && message.quoted.text) {
    inputText = message.quoted.text;
  }
  message.reply("Waiting Response from Xlicon-v2 Bot server...");
  message.react('🤔');
  const encodedText = encodeURIComponent(inputText);
  let response = await Bing(encodedText);
  if (!response) {
    throw new Error("No valid JSON response from Bing ");
  }
  await connection.reply(message.chat, response, message);
};

handler.help = ["bing"];
handler.tags = ['AI'];
handler.command = /^(bing)$/i;
export default handler;

async function Bing(queryText) {
  let response = await (await fetch("https://copilot.github1s.tk/v1/chat/completions", {
    'method': "POST",
    'headers': {
      'Authorization': "dummy",
      'Content-Type': "application/json"
    },
    'body': JSON.stringify({
      'model': "Creative",
      'max_tokens': 100,
      'messages': [{
        'role': "system",
        'content': "You are an helpful assistant."
      }, {
        'role': "user",
        'content': queryText
      }]
    })
  })).json();
  return response.choices[0].message.content;
}
