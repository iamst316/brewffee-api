const {coffeeModel} = require("../Models/coffeeSchema.js");

module.exports.updateEntry = async (req,res) => {
  let {name, update_body} = req.body;
  // update_body = JSON.parse(update_body);

  await coffeeModel.findOneAndUpdate({name},update_body);

  const updated_entry = await coffeeModel.find({name});

  res.send({
    message: "Updated",
    updated_entry: updated_entry
  })

}
