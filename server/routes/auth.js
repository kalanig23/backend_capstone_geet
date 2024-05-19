const express  = require('express');
const router = express.Router();
const { registrationUser, loginUser, allUser } = require('../controller/user');

router.get('/', (req, res)=>{
    res.status(200).send('Auth route!!!')
});

router.post('/register', registrationUser);
router.post('/login', loginUser);
router.get('/all', allUser);

module.exports = router;