let stdouts = [];
let isModified = false;

export default function modifyStdout(maxLength = 200) {
  let oldWrite = process.stdout.write.bind(process.stdout);

  function disable() {
    isModified = false;
    process.stdout.write = oldWrite;
  }

  process.stdout.write = (chunk, encoding, callback) => {
    stdouts.push(Buffer.from(chunk, encoding));
    oldWrite(chunk, encoding, callback);
    if (stdouts.length > maxLength) stdouts.shift();
  };

  isModified = true;

  return {
    disable,
    isModified: () => isModified,
  };
}

export function logs() {
  return Buffer.concat(stdouts);
}
