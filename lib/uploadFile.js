import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload ephemeral file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
const fileIO = async (buffer) => {
  const { ext, mime } = (await fileTypeFromBuffer(buffer)) || {};
  let form = new FormData();
  const blob = new Blob([buffer], { type: mime });
  form.append('file', blob, 'tmp.' + ext);
  let res = await fetch('https://file.io/?expires=1d', {
    method: 'POST',
    body: form,
  });
  return res.json();
};

/**
 * Upload files to RESTfulAPI
 * @param {Buffer|Buffer[]} inp Buffer or array of Buffers
 * @returns {string|null|(string|null)[]}
 */
const RESTfulAPI = async (inp) => {
  let form = new FormData();
  let buffers = Array.isArray(inp) ? inp : [inp];
  for (let buffer of buffers) {
    const blob = new Blob([buffer]);
    form.append('file', blob);
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form,
  });
  return res.json();
};

/**
 * Uploads a file buffer using RESTfulAPI and fileIO
 * @param {Buffer} inp
 * @returns {Promise<string>}
 */
export default async function (inp) {
  let err = false;
  for (let upload of [RESTfulAPI, fileIO]) {
    try {
      let result = await upload(inp);
      if (result) return result;
    } catch (e) {
      err = true;
    }
  }
  if (err) throw new Error('Both uploads failed');
}
