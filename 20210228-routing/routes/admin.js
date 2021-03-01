const express = require('express');
const router = express.Router();

function testMiddleware(_, _, next){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleware2(_, _, next){
    console.log('두번째 미들웨어');
    next();
}

// function loginRequired(req, res, next){
//     if(로그인이 되어 있지 않으면){
//         res.redirect(로그인 창으로);
//     }else{
//         next()
//     }
// }

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (_, res) => {
    res.render('admin/products.html', {
        message : 'hello!!!!!',
        online : 'express'
    });
});

router.get('/products/write', (_, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    res.send(req.body);
});



module.exports = router;