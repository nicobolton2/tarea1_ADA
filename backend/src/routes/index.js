const {Router} = require('express');
const router = Router();

router.get('/',(req,res) => res.json({menssage: 'Hello Word!!'}));

module.exports = router;