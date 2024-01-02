import _0x336ecb from 'node-fetch';
import { fileURLToPath } from 'url';
import _0x19fc41 from 'path';
import { writeFileSync } from 'fs';
async function processTxtAndSaveCredentials(_0xc521d6) {
  const _0x53e848 = fileURLToPath(import.meta.url);
  const _0x3670f8 = _0x19fc41.dirname(_0x53e848);
  let _0x328ed1;
  const _0xcabca5 = /^[a-zA-Z0-9+/]+={0,2}$/.test(_0xc521d6);
  if (_0xcabca5) {
    _0x328ed1 = Buffer.from(_0xc521d6, "base64").toString("utf-8");
  } else {
    const _0x162d98 = "https://mzn-xlicon-md-session.onrender.com/pastes?action=getpaste&id=" + _0xc521d6;
    try {
      const _0x421b7b = await _0x336ecb(_0x162d98);
      const _0x247d2a = await _0x421b7b.json();
      const _0x53757f = _0x247d2a.content;
      _0x328ed1 = Buffer.from(_0x53757f, "base64").toString("utf-8");
    } catch (_0x541f12) {
      console.error("Error retrieving or processing data:", _0x541f12);
      return;
    }
  }
  const _0x95677a = JSON.parse(_0x328ed1);
  const _0x5440f0 = _0x19fc41.join(_0x3670f8, '..', "session", "creds.json");
  writeFileSync(_0x5440f0, JSON.stringify(_0x95677a, null, 0x2));
  console.log("Credentials saved to creds.json");
}
export default processTxtAndSaveCredentials;
