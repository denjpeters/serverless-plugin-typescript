const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    const stage = !!process.env.STAGE ? process.env.STAGE : 'local'
    
    res.send({ application: 'sample-app', version: '1.00', stage: stage });
});
app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1.011', stage: process.env.STAGE, isOffline: !!process.env.IS_OFFLINE ? 1 : 0 });
});
app.post('/api/v1/getback', (req, res) => {
    res.send({ application: 'sample-app', version: '1.02' });
    // res.send({ ...req.body });
});
app.get('*', (req, res) => {
    const stage = !!process.env.STAGE ? process.env.STAGE : 'local'
    
    res.send({ application: 'sample-app', version: '0.00', stage: stage });
});
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
