const express = require('express'); // npm i express
const router = express();
// api npm // npm i axios

const bodyParser = require("body-parser"); // npm i body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const store = require('./src/controllers/StoreController');

router.use('/store', store);


//포트 연결
router.listen(3002,()=>console.log(`http://localhost:3002`));