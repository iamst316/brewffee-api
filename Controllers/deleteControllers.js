const {coffeeModel} = require("../Models/coffeeSchema");

module.exports.deleteEntry = async (req,res) =>{
    const {name} = req.body;

    await coffeeModel.deleteOne({name});

    res.send({
        message: "Deleted Successfully."
    })
}