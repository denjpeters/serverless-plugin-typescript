const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send({ application: 'sample-app', version: '1.00', stage: process.env.STAGE });
});
app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1.01' });
});
app.post('/api/v1/getback', (req, res) => {
    res.send({ application: 'sample-app', version: '1.02' });
    // res.send({ ...req.body });
});
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
