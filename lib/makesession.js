/**
 * Thanks to @SuhailTechInfo
 * Contact https://github.com/SuhailTechInfo
 */



import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import path from 'path';
import { writeFileSync } from 'fs';

let myQrUrl = "https://xlicon.com/qr"      // Put  your qr url here



async function processTxtAndSaveCredentials(txt) {

let Ids =  txt ? txt : process.env.SESSION_ID || ""
if(!Ids) return console.log("SESSION_ID Missing!") 

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  let session__Id;

if(Ids && Ids.toLowerCase().includes("guru") ) {      
    
    
        const url = `https://pastebin.guruapi.tech/pastes?action=getpaste&id=${Ids}`;    
        try {
          const response = await fetch(url);    
          const base64Data = await response.json();    
          const realbase64Data = base64Data.content;    
          session__Id = Buffer.from(realbase64Data, 'base64').toString('utf-8');
        } catch (error) {
          console.error(`Can't get SESSION_ID from GURU Server\nPlease Scan Qr From ${myQrUrl}\n[ERROR]:`, error);
          return
        }


}else { session__Id = Buffer.from(Ids, 'base64').toString('utf-8'); }


 if(!session__Id) return console.log("Can't Get SESSION_ID From Server!") 
  





  const creds_Data  = JSON.parse(session__Id);
  const credsPath = path.join(__dirname, '..', 'session', 'creds.json');
  writeFileSync(credsPath, JSON.stringify(creds_Data, null, 2));
  console.log('Session_Id Successfuly stored!');

}

export default processTxtAndSaveCredentials;