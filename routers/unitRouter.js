let express = require('express');
let router = express.Router();
let controller = require('../controllers/unitController');

router.post('/', function(req,res){
    controller.postUnit(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllUnits(req,res);
});

router.delete('/', (req,res)=>{
    controller.deleteUnit(req,res);
});

module.exports = router;