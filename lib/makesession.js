import fetch from 'node-fetch'; 
import { fileURLToPath } from 'url'; 
import path from 'path'; 
import { writeFileSync } from 'fs'; 

async function processTxtAndSaveCredentials(inputData) { 
  const filePath = fileURLToPath(import.meta.url); 
  const dirPath = path.dirname(filePath); 
  let decodedData; 
  
  const isBase64 = /^[a-zA-Z0-9+/]+={0,2}$/.test(inputData); 
  
  if (isBase64) { 
    decodedData = Buffer.from(inputData, "base64").toString("utf-8"); 
  } else { 
    const apiUrl = "https://mzn-xlicon-md-session.onrender.com/pastes?action=getpaste&id=" + inputData; 
    try { 
      const response = await fetch(apiUrl); 
      const responseData = await response.json(); 
      const base64Content = responseData.content; 
      decodedData = Buffer.from(base64Content, "base64").toString("utf-8"); 
    } catch (error) { 
      return; 
    } 
  } 
  
  try { 
    const jsonData = JSON.parse(decodedData); 
    const outputFilePath = path.join(dirPath, '..', "session", "creds.json"); 
    writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2)); 
  } catch (error) { 
  } 
}

export default processTxtAndSaveCredentials;
