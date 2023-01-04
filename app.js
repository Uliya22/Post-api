const express = require('express');
const { router } = require('./router');

const app = express();

// app.use("/", (req, res, next) => {
//     console.log('Hello from middleware');
//     next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Hello");
//   next();
// });

app.use('/', router);
router.get('/', (req, res, next) => {
    res.end('Hello from  GET router')
})

router.post('/posts', (req, res, next) => {
    res.end('Hello from POST /posts')
})

module.exports = {
    app,
}