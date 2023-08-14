const sqlite3 = require('sqlite3').verbose();

//create a new database connection
const db = new sqlite3.Database('vocab.db');

//create a data table for the vocabulary 
db.run(`CREATE TABLE IF NOT EXISTS vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    term TEXT,
    pinyin TEXT,
    definition TEXT
  )`);

// seed initial data 
db.serialize(() => {
    const stmt = db.prepare('INSERT INTO vocabulary (term, definition) VALUES (?, ?')

    stmt.run('程序', 'chéngxù','Program');
    stmt.run('变量', 'biànliàng','Variable');
    stmt.run('函数', 'hánshù','Function');
    stmt.run('循环', 'xúnhuán','Loop');
    stmt.run('条件语句', 'tiáojiànyǔjù','Conditional Statement');
    stmt.run('类', 'lèi','Class');
    stmt.run('方法', 'fāngfǎ','Method');
    stmt.run('数组', 'shùzǔ','Array');
    stmt.run('对象', 'duìxiàng','Object');

    stmt.finalize();
})

module.exports = db;