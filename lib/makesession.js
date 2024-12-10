import { fileURLToPath } from 'url';
import path from 'path';
import { writeFileSync } from 'fs';
import * as mega from 'megajs';

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
 
    const megaCode = txt.replace('Xlicon-v2~', '').trim();

  
    if (!megaCode || !/^[a-zA-Z0-9_-]+$/.test(megaCode)) {
      throw new Error(`Invalid MEGA code: "${megaCode}"`);
    }

    const megaUrl = `https://mega.nz/file/${megaCode}`;
    console.log('Generated MEGA URL:', megaUrl);

  
    const file = mega.File.fromURL(megaUrl);
    const stream = file.download();

    let data = '';
    for await (const chunk of stream) {
      data += chunk.toString();
    }

    const credsPath = path.join(__dirname, '..', 'session', 'creds.json');
    writeFileSync(credsPath, data);
    console.log('Saved credentials to', credsPath);

  } catch (error) {
    console.error('Error processing credentials:', error.message);
  }
}

export default processTxtAndSaveCredentials;
