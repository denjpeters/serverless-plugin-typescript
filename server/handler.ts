const serverless = require('serverless-http')
const express = require('express')
const path = require('path')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/api', (req: any, res: any) => {
    const stage = process.env.STAGE ?? '123'
    
    res.send({application: 'sample-app', version: '2.00', stage: stage})
})
app.get('/api/info', (req: any, res: any) => {
    res.send({
        application: 'sample-app',
        version: '1.011',
        stage: process.env.STAGE,
        isOffline: !!process.env.IS_OFFLINE ? 1 : 0
    })
})
app.post('/api/v1/getback', (req: any, res: any) => {
    res.send({application: 'sample-app', version: '1.02'})
    // res.send({ ...req.body });
})
app.get('*', (req: any, res: any) => {
    res.sendFile(path.resolve('./') + '/build/app/index.html')
})
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app)
