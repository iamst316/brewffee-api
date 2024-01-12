// delete file after injection
const {coffeeModel} = require('./coffeeSchema');
const data = require("./dummy.json");


module.exports.Inject = async () => {
    await coffeeModel.deleteMany({});
    await coffeeModel.insertMany(data);  
    // console.log("")
}


