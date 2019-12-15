const express = require('express');
const db = require('./sql-api');

const app = express();
const SERVICE_PORT = 3000;

app.get('/groups', (req, res) => {
    db.get_applications((results) => {
        let string = JSON.stringify(results);
        console.log(JSON.parse(string));
        res.send(JSON.parse(string));
    });
});

app.get('/g/:group_id/cards', (req, res) => {
    db.get_cards(req.params.group_id, (results) => {
        let string = JSON.stringify(results);
        console.log(JSON.parse(string));
        res.send(JSON.parse(string));
    });
});

app.listen(SERVICE_PORT, () => console.log('API opened on port ${SERVICE_PORT}'));
