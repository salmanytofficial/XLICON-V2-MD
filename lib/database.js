import { resolve, dirname as _dirname } from 'path';
import _fs, { existsSync, readFileSync } from 'fs';
const { promises: fs } = _fs;

class Database {
  constructor(filepath, ...args) {
    this.file = resolve(filepath);
    this.logger = console;
    this._load();
    this._jsonargs = args;
    this._state = false;
    this._queue = [];
    this._interval = setInterval(async () => {
      if (!this._state && this._queue && this._queue[0]) {
        this._state = true;
        await this[this._queue.shift()]().catch(this.logger.error);
        this._state = false;
      }
    }, 1000);
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.save();
  }

  load() {
    this._queue.push('_load');
    return Promise.resolve();
  }

  async save() {
    this._queue.push('_save');
    await this._save();
    return Promise.resolve();
  }

  _load() {
    try {
      return this._data = existsSync(this.file) ? JSON.parse(readFileSync(this.file)) : {};
    } catch (e) {
      this.logger.error(e);
      return this._data = {};
    }
  }

  async _save() {
    if (!existsSync(this.file)) {
      await fs.mkdir(_dirname(this.file), { recursive: true });
    }
    await fs.writeFile(this.file, JSON.stringify(this._data, ...this._jsonargs));
    return this.file;
  }
}

export default Database;

//hehe
