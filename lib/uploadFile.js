import fetch from 'node-fetch'
import { FormData, Blob } from 'formdata-node'
import { fileTypeFromBuffer } from 'file-type'
/**
 * Upload epheremal file to file.io
 * `Expired in 1 day`
 * `100MB Max Filesize`
 * @param {Buffer} buffer File Buffer
 */
const fileIO = async buffer => {
  const { ext, mime } = await fileTypeFromBuffer(buffer) || {}
  let form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  form.append('file', blob, 'tmp.' + ext)
  let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
	@@ -27,12 +27,11 @@ const fileIO = async buffer => {
 * @returns {string|null|(string|null)[]}
 */
const RESTfulAPI = async inp => {
  let form = new FormData()
  let buffers = inp
  if (!Array.isArray(inp)) buffers = [inp]
  for (let buffer of buffers) {
    const blob = new Blob([buffer.toArrayBuffer()])
    form.append('file', blob)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
	@@ -48,11 +47,6 @@ const RESTfulAPI = async inp => {
  }
}

/**
 * 
 * @param {Buffer} inp 
 * @returns {Promise<string>}
 */
export default async function (inp) {
  let err = false
  for (let upload of [RESTfulAPI, fileIO]) {
	@@ -63,4 +57,4 @@ export default async function (inp) {
    }
  }
  if (err) throw err
}
