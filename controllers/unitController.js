let collection = require('../models/unitModel');

const postUnit = (req,res) => {
    let unit = req.body;
    collection.postUnit(unit, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllUnits = (req,res) => {
    collection.getAllUnits((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteUnit = (req,res) => {
    let unit = req.body;
    collection.deleteOne(unit, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postUnit,getAllUnits,deleteUnit}