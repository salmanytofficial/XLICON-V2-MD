import fs from 'fs';
import path, { dirname } from 'path';
import assert from 'assert';
import syntaxError from 'syntax-error';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Get directories from package.json if defined, otherwise use the current directory
let packageJson;
try {
    packageJson = require(path.join(__dirname, './package.json'));
} catch (error) {
    console.error('Could not load package.json:', error);
    packageJson = {};
}

let directories = packageJson.directories ? Object.keys(packageJson.directories) : [];
let folders = ['.', ...directories];
let files = [];

// Collect all .js files from the specified directories
for (let folder of folders) {
    const folderPath = path.resolve(__dirname, folder);
    const folderFiles = fs.readdirSync(folderPath).filter(v => v.endsWith('.js'));
    for (let file of folderFiles) {
        files.push(path.join(folderPath, file));
    }
}

// Check each file for syntax errors
for (let file of files) {
    if (file === __filename) continue; // Skip the current file
    console.error('Checking', file);
    const code = fs.readFileSync(file, 'utf8');
    const error = syntaxError(code, file, {
        sourceType: 'module',
        allowReturnOutsideFunction: true,
        allowAwaitOutsideFunction: true
    });
    if (error) {
        throw new Error(`Syntax error in file: ${file}\n\n${error}`);
    }
    assert.ok(file);
    console.log('Done', file);
}
