'use strict';

import os from 'os';
import express from 'express';
import { spawn } from 'child_process';
import path from 'path';
import module from 'module';
import fs from 'fs';
import fsModule from 'fs';
import chalk from 'chalk';
import cfonts from 'cfonts';

const { say } = cfonts;

say("XLICON - V2", {
  'font': "block",
  'align': "center",
  'colors': ['#ff9900'],
  'background': "transparent",
  'letterSpacing': 0x1,
  'lineHeight': 0x1,
  'space': true,
  'maxLength': '15'
});

say("Xlicon-BOT-V2 By Salman._.", {
  'font': "chrome",
  'align': "center",
  'colors': ["red", "magenta"],
  'background': "transparent",
  'letterSpacing': 0x1,
  'lineHeight': 0x1,
  'space': true,
  'maxLength': '30'
});

const app = express();
const port = process.env.PORT || 0x1f90;
const basePath = new URL(import.meta.url).pathname;
const htmlDir = path.join(path.dirname(basePath), 'Assets');

const sendHtml = (res, req, page) => {
  res.sendFile(path.join(htmlDir, page + ".html"));
};

app.get('/', (req, res) => sendHtml(res, req, "guru"));

app.listen(port, () => {
  console.log(chalk.green("Port " + port + " is open"));
});

let isRunning = false;

async function start(scriptName) {
  if (isRunning) {
    return;
  }
  isRunning = true;
  const currentScriptPath = new URL(import.meta.url).pathname;
  const scriptArgs = [path.join(path.dirname(currentScriptPath), scriptName), ...process.argv.slice(0x2)];
  const childProcess = spawn(process.argv[0x0], scriptArgs, {
    'stdio': ["inherit", "inherit", "inherit", "ipc"]
  });

  childProcess.on("message", msg => {
    console.log(chalk.cyan("✔️RECEIVED " + msg));
    switch (msg) {
      case "reset":
        childProcess.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        childProcess.send(process.uptime());
        break;
    }
  });

  childProcess.on("exit", exitCode => {
    isRunning = false;
    console.error(chalk.red("❌Exited with code: " + exitCode));
    if (exitCode === 0x0) {
      return;
    }
    fs.watchFile(scriptArgs[0x0], () => {
      fs.unwatchFile(scriptArgs[0x0]);
      start("XLICON.js");
    });
  });

  childProcess.on("error", err => {
    console.error(chalk.red("Error: " + err));
    childProcess.kill();
    isRunning = false;
    start('XLICON.js');
  });

  const pluginsDir = path.join(path.dirname(currentScriptPath), "plugins");

  fs.readdir(pluginsDir, async (err, files) => {
    if (err) {
      console.error(chalk.red("Error reading plugins folder: " + err));
      return;
    }
    console.log(chalk.yellow("Installed " + files.length + " plugins"));
    try {
      const { default: baileys } = await import("@whiskeysockets/baileys");
      const latestBaileysVersion = (await baileys.fetchLatestBaileysVersion()).version;
      console.log(chalk.yellow("Using Baileys version " + latestBaileysVersion));
    } catch (err) {
      console.error(chalk.red(" Baileys library is not installed"));
    }
  });
}

start('XLICON.js');

process.on("unhandledRejection", () => {
  console.error(chalk.red("Unhandled promise rejection. Bot will restart..."));
  start("XLICON.js");
});

process.on("exit", exitCode => {
  console.error(chalk.red("Exited with code: " + exitCode));
  console.error(chalk.red("Bot will restart..."));
  start("XLICON.js");
});
