const express = require('express'); // npm i express
const router = express();

//테스트 라우터
router.get('/test', (req, res) => {
    console.log('/store/test 호출');
    res.json({'code':'S001'});
})

module.exports = router;