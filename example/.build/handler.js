var serverless = require('serverless-http');
var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', function (req, res) {
    var stage = !!process.env.STAGE ? process.env.STAGE : 'local';
    res.send({ application: 'sample-app', version: '1.00', stage: stage });
});
app.get('/api/info', function (req, res) {
    res.send({ application: 'sample-app', version: '1.010', stage: process.env.STAGE, isOffline: process.env.IS_OFFLINE });
});
app.post('/api/v1/getback', function (req, res) {
    res.send({ application: 'sample-app', version: '1.02' });
    // res.send({ ...req.body });
});
app.get('/', function (req, res) {
    var stage = !!process.env.STAGE ? process.env.STAGE : 'local';
    res.send({ application: 'sample-app', version: '0.00', stage: stage });
});
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
//# sourceMappingURL=handler.js.map