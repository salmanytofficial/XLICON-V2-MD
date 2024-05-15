process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import { createRequire } from 'module';
import _0x2e740d, { join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import _0x456d95 from './lib/tempclear.js';
import 'axios';
import { platform } from 'process';
import _0x58cc04 from 'dotenv';
global.__filename = function filename(_0x5f3d8e = import.meta.url, _0xf164d = platform !== "win32") {
  return _0xf164d ? /file:\/\/\//.test(_0x5f3d8e) ? fileURLToPath(_0x5f3d8e) : _0x5f3d8e : pathToFileURL(_0x5f3d8e).toString();
};
global.__dirname = function dirname(_0x433294) {
  return _0x2e740d.dirname(global.__filename(_0x433294, true));
};
global.__require = function require(_0x470632 = import.meta.url) {
  return createRequire(_0x470632);
};
global.gurubot = "https://guruapi.tech/api";
import 'ws';
import 'cfonts';
import { readdirSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x4a9f72 from './lib/makesession.js';
import _0x5f3915 from 'yargs';
import 'util';
import 'child_process';
import _0x421e30 from 'pino';
import _0x119f07 from 'lodash';
import _0x499532 from 'chalk';
import _0x37cb86 from 'syntax-error';
import 'os';
import { format } from 'util';
import '@hapi/boom';
import _0x51a471 from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import { MongoDB } from './lib/mongoDB.js';
import _0x543439 from './lib/cloudDBAdapter.js';
import _0x4ab311 from 'node-cache';
import _0x162cd5 from 'readline';
import { parsePhoneNumber } from 'libphonenumber-js';
import './lib/helper.js';
import 'emoji-regex';
_0x58cc04.config();
async function main() {
  const _0x3208a7 = process.env.SESSION_ID;
  if (!_0x3208a7) {
    console.error("Environment variable not found.");
    return;
  }
  try {
    await _0x4a9f72(_0x3208a7);
    console.log("processTxtAndSaveCredentials completed.");
  } catch (_0x3cff24) {
    console.error("Error:", _0x3cff24);
  }
}
main();
await delay(10000);
async function gandu() {
  try {
    const _0x2037c5 = readFileSync("package.json", 'utf8');
    const _0x4c3a1e = JSON.parse(_0x2037c5);
    const _0x4a7429 = _0x4c3a1e.author && _0x4c3a1e.author.name;
    if (!_0x4a7429) {
      console.log('LOl');
      process.exit(0x1);
    }
    const _0x5c54b6 = Buffer.from("Z3VydQ==", "base64").toString();
    const _0x55ff3b = Buffer.from("Q2hlYXAgQ29weSBPZiBHdXJ1IEJvdCBGb3VuZCAsIFBsZWFzZSBVc2UgdGhlIE9yaWdpbmFsIEd1cnUgQm90IEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0d1cnUzMjIvR1VSVS1CT1QK", 'base64').toString();
    const _0x40fa41 = Buffer.from('U2VjdXJpdHkgY2hlY2sgcGFzc2VkLCBUaGFua3MgRm9yIHVzaW5nIEd1cnUgTXVsdGlEZXZpY2U=', "base64").toString();
    if (_0x4a7429 && _0x4a7429.trim().toLowerCase() !== _0x5c54b6.toLowerCase()) {
      console.log(_0x55ff3b);
      process.exit(0x1);
    } else {
      console.log('' + _0x40fa41);
      console.log(_0x499532.bgBlack(_0x499532.redBright("initializing Guru Bot")));
    }
  } catch (_0xeac76a) {
    console.error("Error:", _0xeac76a);
  }
}
gandu();
const pairingCode = !!global.pairingNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const useQr = process.argv.includes("--qr");
const MAIN_LOGGER = _0x421e30({
  'timestamp': () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";
undefined?.["readFromFile"]('./session');
setInterval(() => {
  undefined?.['writeToFile']("./session");
}, 60000);
const msgRetryCounterCache = new _0x4ab311();
const rl = _0x162cd5.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x37bcb9 => new Promise(_0x1394ec => rl.question(_0x37bcb9, _0x1394ec));
const {
  chain
} = _0x119f07;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.API = (_0x2d7fa4, _0x4a9957 = '/', _0x3e5033 = {}, _0x44a96c) => (_0x2d7fa4 in global.APIs ? global.APIs[_0x2d7fa4] : _0x2d7fa4) + _0x4a9957 + (_0x3e5033 || _0x44a96c ? '?' + new URLSearchParams(Object.entries({
  ..._0x3e5033,
  ...(_0x44a96c ? {
    [_0x44a96c]: global.APIKeys[_0x2d7fa4 in global.APIs ? global.APIs[_0x2d7fa4] : _0x2d7fa4]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x5f3915(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (process.env.PREFIX || "*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new _0x543439(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? new MongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x201513 => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x201513(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFolder = "session";
const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFolder);
const connectionOptions = {
  'version': version,
  'logger': _0x51a471({
    'level': "fatal"
  }),
  'printQRInTerminal': !pairingCode,
  'mobile': useMobile,
  'browser': ["chrome (linux)", '', ''],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x51a471().child({
      'level': "fatal",
      'stream': 'store'
    }))
  },
  'markOnlineOnConnect': true,
  'generateHighQualityLinkPreview': true,
  'getMessage': async _0x345f52 => {
    let _0x52036e = jidNormalizedUser(_0x345f52.remoteJid);
    let _0x26a900 = await undefined.loadMessage(_0x52036e, _0x345f52.id);
    return _0x26a900?.['message'] || '';
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'defaultQueryTimeoutMs': undefined
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
undefined?.["bind"](conn.ev);
if (pairingCode && !conn.authState.creds.registered) {
  if (useMobile) {
    throw new Error("Cannot use pairing code with mobile api");
  }
  let phoneNumber;
  if (!!global.pairingNumber) {
    phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x4e6b31 => phoneNumber.startsWith(_0x4e6b31))) {
      console.log(_0x499532.bgBlack(_0x499532.redBright("Start with your country's WhatsApp code, Example : 62xxx")));
      process.exit(0x0);
    }
  } else {
    phoneNumber = await question(_0x499532.bgBlack(_0x499532.greenBright("Please type your WhatsApp number : ")));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x183b4d => phoneNumber.startsWith(_0x183b4d))) {
      console.log(_0x499532.bgBlack(_0x499532.redBright("Start with your country's WhatsApp code, Example : 62xxx")));
      phoneNumber = await question(_0x499532.bgBlack(_0x499532.greenBright("Please type your WhatsApp number : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
      rl.close();
    }
  }
  setTimeout(async () => {
    let _0x6cba03 = await conn.requestPairingCode(phoneNumber);
    _0x6cba03 = _0x6cba03?.["match"](/.{1,4}/g)?.["join"]('-') || _0x6cba03;
    const _0x1919d2 = _0x499532.bold.greenBright("Your Pairing Code:") + " " + _0x499532.bgGreenBright(_0x499532.black(_0x6cba03));
    console.log(_0x1919d2);
  }, 0xbb8);
}
if (useMobile && !conn.authState.creds.registered) {
  const {
    registration
  } = conn.authState.creds || {
    'registration': {}
  };
  if (!registration.phoneNumber) {
    console.log("📨 " + _0x499532.redBright("Please type your WhatsApp number") + ':');
    let phoneNumber = await question("   " + _0x499532.cyan("- Number") + ": ");
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x16a2ce => phoneNumber.startsWith(_0x16a2ce))) {
      console.log("💬 " + _0x499532.redBright("Start with your country's WhatsApp code, Example 62xxx") + ':');
      console.log("📨 " + _0x499532.redBright("Please type your WhatsApp number") + ':');
      phoneNumber = await question("   " + _0x499532.cyan("- Number") + ": ");
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    }
    registration.phoneNumber = '+' + phoneNumber;
  }
  const phoneNumber = parsePhoneNumber(registration.phoneNumber);
  if (!phoneNumber.isValid()) {
    conn.logger.error("\nInvalid phone number: " + registration.phoneNumber);
  }
  registration.phoneNumber = phoneNumber.format("E.164");
  registration.phoneNumberCountryCode = phoneNumber.countryCallingCode;
  registration.phoneNumberNationalNumber = phoneNumber.nationalNumber;
  const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode];
  registration.phoneNumberMobileCountryCode = mcc;
  async function enterCode() {
    try {
      console.log("📨 " + _0x499532.redBright("Please Enter Your OTP Code") + ':');
      const _0x536387 = await question("   " + _0x499532.cyan("- Code") + ": ");
      const _0x43e2db = await conn.register(_0x536387.replace(/[^0-9]/g, '').trim().toLowerCase());
      console.log("💬 " + _0x499532.redBright("Successfully registered your phone number."));
      console.log(_0x43e2db);
      rl.close();
    } catch (_0x14bbcc) {
      conn.logger.error("\nFailed to register your phone number. Please try again.\n", _0x14bbcc);
      await askOTP();
    }
  }
  async function askOTP() {
    console.log("📨 " + _0x499532.redBright("What method do you want to use? \"sms\" or \"voice\""));
    let _0x52435c = await question("   " + _0x499532.cyan("- Method") + ": ");
    _0x52435c = _0x52435c.replace(/["']/g, '').trim().toLowerCase();
    if (_0x52435c !== "sms" && _0x52435c !== "voice") {
      return await askOTP();
    }
    registration.method = _0x52435c;
    try {
      await conn.requestRegistrationCode(registration);
      await enterCode();
    } catch (_0x15a9f6) {
      conn.logger.error("\nFailed to request registration code. Please try again.\n", _0x15a9f6);
      await askOTP();
    }
  }
  await askOTP();
}
conn.logger.info("\nWaiting For Login\n");
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp"];
        tmp.forEach(_0x5c818e => cp.spawn("find", [_0x5c818e, "-amin", '3', "-type", 'f', '-delete']));
      }
    }, 30000);
  }
}
if (opts.server) {
  (await import("./server.js"))["default"](global.conn, PORT);
}
function runCleanup() {
  _0x456d95().then(() => {
    console.log("Temporary file cleanup completed.");
  })["catch"](_0x272185 => {
    console.error("An error occurred during temporary file cleanup:", _0x272185);
  })['finally'](() => {
    setTimeout(runCleanup, 120000);
  });
}
runCleanup();
function purgeSession() {
  let _0x39cbec = [];
  const _0x11bfa7 = readdirSync('./session');
  const _0x4e0f07 = _0x11bfa7.filter(_0x51eb8c => {
    return _0x51eb8c.startsWith("pre-key-");
  });
  _0x39cbec = [..._0x39cbec, ..._0x4e0f07];
  _0x4e0f07.forEach(_0x346e4f => {
    unlinkSync("./session/" + _0x346e4f);
  });
}
async function connectionUpdate(_0x9ef145) {
  const {
    connection: _0x583ae1,
    lastDisconnect: _0x5fac73,
    isNewLogin: _0x1576cd,
    qr: _0x96ffca
  } = _0x9ef145;
  global.stopped = _0x583ae1;
  if (_0x1576cd) {
    conn.isInit = true;
  }
  const _0xc4479d = _0x5fac73?.["error"]?.["output"]?.["statusCode"] || _0x5fac73?.["error"]?.['output']?.["payload"]?.["statusCode"];
  if (_0xc4479d && _0xc4479d !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    conn.logger.info(await global.reloadHandler(true)["catch"](console.error));
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (!pairingCode && !useMobile && useQr && _0x96ffca != 0x0 && _0x96ffca != undefined) {
    conn.logger.info(_0x499532.yellow("\nLogging in...."));
  }
  if (_0x583ae1 === "open") {
    conn.logger.info(_0x499532.yellow("\n🚩 R E A D Y"));
  }
  if (_0x583ae1 == 'close') {
    conn.logger.error(_0x499532.yellow("\nconnection closed.... Trying to Restart"));
    process.send("reset");
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x5df9cc) {
  try {
    const _0x3ab6f4 = await import('./handler.js?update=' + Date.now())["catch"](console.error);
    if (Object.keys(_0x3ab6f4 || {}).length) {
      handler = _0x3ab6f4;
    }
  } catch (_0x1bee56) {
    console.error;
  }
  if (_0x5df9cc) {
    const _0x18a8c1 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x18a8c1
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("messages.update", conn.pollUpdate);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off('creds.update', conn.credsUpdate);
  }
  conn.welcome = "👋 Hello @user!\n\n🎉 *WELCOME* to the group @group!\n\n📜 Please read the *DESCRIPTION* @desc.";
  conn.bye = "👋 GOODBYE @user 👋\n\nSee you later!";
  conn.spromote = "👤👑*@user* has been promoted to an admin!";
  conn.sdemote = "👤🙅‍♂️*@user* is no longer an admin.";
  conn.sDesc = "📝 The group description has been updated to:\n@desc";
  conn.sSubject = "📌 The group title has been changed to:\n@group";
  conn.sIcon = "🖼️ The group icon has been updated!";
  conn.sRevoke = "🔗 The group link has been changed to:\n@revoke";
  conn.sAnnounceOn = "🔒 The group is now *CLOSED*!\nOnly admins can send messages.";
  conn.sAnnounceOff = "🔓 The group is now *OPEN*!\nAll participants can send messages.";
  conn.sRestrictOn = "🚫 Edit Group Info has been restricted to admins only!";
  conn.sRestrictOff = "✅ Edit Group Info is now available to all participants!";
  conn.handler = handler.handler.bind(global.conn);
  conn.pollUpdate = handler.pollUpdate.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  const _0x2d83cd = new Date();
  const _0x3f5b32 = new Date(conn.ev);
  if (_0x2d83cd >= _0x3f5b32) {} else {}
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("messages.update", conn.pollUpdate);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on('presence.update', conn.presenceUpdate);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x3b4709 => /\.js$/.test(_0x3b4709);
global.plugins = {};
async function filesInit() {
  for (const _0x5b6881 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x1ff60d = global.__filename(join(pluginFolder, _0x5b6881));
      const _0x2483fe = await import(_0x1ff60d);
      global.plugins[_0x5b6881] = _0x2483fe['default'] || _0x2483fe;
    } catch (_0x5190da) {
      conn.logger.error(_0x5190da);
      delete global.plugins[_0x5b6881];
    }
  }
}
filesInit().then(_0x2ff588 => Object.keys(global.plugins))["catch"](console.error);
global.reload = async (_0x2fde86, _0x588cee) => {
  if (/\.js$/.test(_0x588cee)) {
    const _0x834481 = global.__filename(join(pluginFolder, _0x588cee), true);
    if (_0x588cee in global.plugins) {
      if (existsSync(_0x834481)) {
        conn.logger.info("\nUpdated plugin - '" + _0x588cee + "'");
      } else {
        conn.logger.warn("\nDeleted plugin - '" + _0x588cee + "'");
        return delete global.plugins[_0x588cee];
      }
    } else {
      conn.logger.info("\nNew plugin - '" + _0x588cee + "'");
    }
    const _0x5acbf3 = _0x37cb86(readFileSync(_0x834481), _0x588cee, {
      'sourceType': 'module',
      'allowAwaitOutsideFunction': true
    });
    if (_0x5acbf3) {
      conn.logger.error("\nSyntax error while loading '" + _0x588cee + "'\n" + format(_0x5acbf3));
    } else {
      try {
        const _0x3049b0 = await import(global.__filename(_0x834481) + "?update=" + Date.now());
        global.plugins[_0x588cee] = _0x3049b0["default"] || _0x3049b0;
      } catch (_0x8a1ff7) {
        conn.logger.error("\nError require plugin '" + _0x588cee + "\n" + format(_0x8a1ff7) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x58d538], [_0x168b1c]) => _0x58d538.localeCompare(_0x168b1c)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  Object.freeze(global.support);
}
const actions = [{
  'func': purgeSession,
  'message': "\nStored Sessions Cleared ✅"
}];
for (const action of actions) {
  setInterval(async () => {
    if (stopped === 'close' || !conn || !conn.user) {
      return;
    }
    await action.func();
    console.log(_0x499532.cyanBright(action.message + "\n"));
  }, 600000);
}
_quickTest()["catch"](console.error);
