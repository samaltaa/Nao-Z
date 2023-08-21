const sqlite3 = require('sqlite3').verbose();

export default async (req, res) => {
    const db = new sqlite3.Database('vocab.db');

    db.all('SELECT term, definition FROM vocabulary', [], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Error fetching data'});
            return;
        }
        res.status(200).json(rows);
    });

    db.close();
};
