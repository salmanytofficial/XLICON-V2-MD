import { exec } from 'child_process';
import _0xbf8510 from 'performance-now';
let handler = async (_0x522480, {
  conn: _0x56505d
}) => {
  let _0x9edb5f = {
    'key': {
      'fromMe': false,
      'participant': "0@s.whatsapp.net",
      'remoteJid': 'status@broadcast'
    },
    'message': {
      'contactMessage': {
        'displayName': "XLICON-V2",
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'XLICON-V2'\nitem1.TEL;waid=" + _0x522480.sender.split('@')[0x0] + ':' + _0x522480.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    }
  };
  let _0x40c367 = await _0x56505d.sendMessage(_0x522480.chat, {
    'text': 'Pinging...'
  }, {
    'quoted': _0x9edb5f
  });
  let _0x567650 = _0xbf8510();
  await exec("neofetch --stdout", async (_0x3af436, _0x3214b5) => {
    let _0x34dddc = (_0xbf8510() - _0x567650).toFixed(0x4);
    await _0x56505d.relayMessage(_0x522480.chat, {
      'protocolMessage': {
        'key': _0x40c367.key,
        'type': 0xe,
        'editedMessage': {
          'conversation': "yeah lets go ! Latency: " + _0x34dddc + " ms"
        }
      }
    }, {});
  });
};
handler.help = ["ping"];
handler.tags = ["main"];
handler.command = ["ping", "speed"];
export default handler;
