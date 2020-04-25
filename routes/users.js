const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) =>{
    res.send(`Parâmetro recebido ${req.params.id}`);
});

module.exports = router;