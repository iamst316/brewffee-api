const { coffeeModel } = require("../Models/coffeeSchema");


module.exports.Hello = (req,res) =>{
  res.send("Hello!!! Welcome To Brewffee!!!")
}

module.exports.createEntry = async (req,res) => {
  const incoming_data = req.body;
  await coffeeModel.create(incoming_data);
  res.send("Added Data");
}
