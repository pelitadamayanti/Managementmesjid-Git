const sqlite = require('better-sqlite3-with-prebuilds');
const db = new sqlite("../DB_mesjid.db");
exports.db = db;
