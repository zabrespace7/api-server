const config = require('./config');

class Database {
  constructor() {
    this.connected = false;
    this.pool = null;
  }

  async connect() {
    const { host, port, name } = config.db;
    console.log(`Connecting to ${host}:${port}/${name}`);
    this.connected = true;
    return this;
  }

  async query(sql, params = []) {
    if (!this.connected) throw new Error('Not connected');
    console.log(`Query: ${sql}`, params);
    return { rows: [], rowCount: 0 };
  }

  async close() {
    this.connected = false;
    console.log('Database connection closed');
  }
}

module.exports = new Database();