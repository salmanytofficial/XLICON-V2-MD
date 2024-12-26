import fetch from "node-fetch";
import fs from "fs";

let nicknameCharIdDict = {};
const storageFilePath = "cai_nicknames.json";

// Load existing data from the storage file
if (fs.existsSync(storageFilePath)) {
  try {
    const fileData = fs.readFileSync(storageFilePath, "utf-8");
    nicknameCharIdDict = JSON.parse(fileData);
  } catch (error) {
    console.error("Error loading JSON file:", error);
  }
}

// Get list of available nicknames
const nicknames = Object.keys(nicknameCharIdDict);

export async function before(A, { conn, isOwner, isAdmin, isROwner }) {
  if (A.text && A.text.startsWith(".")) {
    const messageParts = A.text.split(" ");
    const command = messageParts[0].slice(1);

    // Check if the nickname is valid
    if (nicknames.includes(command)) {
      conn.sendPresenceUpdate("composing", A.chat);
      const charId = nicknameCharIdDict[command];
      const userMessage = messageParts.slice(1).join(" ");

      try {
        const response = await fetch(`https://animecafe-characterai-indratensei.cloud.okteto.net/cai?char=${charId}&message=${encodeURIComponent(userMessage)}`);
        const responseData = await response.json();
        const replyText = responseData.text;
        A.reply(replyText);
      } catch (error) {
        console.error("Error sending request:", error);
      }
    }
  }
}
