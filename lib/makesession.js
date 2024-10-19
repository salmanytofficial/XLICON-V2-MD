import { fileURLToPath } from 'url';
import path from 'path';
import { writeFileSync } from 'fs';
import * as mega from 'megajs'; 

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url);
  const _dirname = path.dirname(_filename);

  const megaCode = txt.replace('xliconv2~', '').trim();
  const megaUrl = https://mega.nz/file/${megaCode};
  console.log('Generated MEGA URL:', megaUrl);

  const file = mega.File.fromURL(megaUrl);
  
  try {
    const stream = file.download();
    let data = '';

    for await (const chunk of stream) {
      data += chunk.toString();
    }

    const credsPath = path.join(__dirname, '..', 'session', 'creds.json');
    writeFileSync(credsPath, data);
    console.log('Saved credentials to', credsPath);
    
  } catch (error) {
    console.error('Error downloading or saving credentials:', error);
  }
}

export default processTxtAndSaveCredentials;
