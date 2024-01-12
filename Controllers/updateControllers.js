const {coffeeModel} = require("../Models/coffeeSchema.js");

module.exports.updateEntry = (req,res) => {
  const {name, update_body} = req.body;

  // await coffeeModel.updateOne({name: name},update_body);

  // const updated_entry = await coffeeModel.find({name});
  // res.send({
  //   message: "Updated",
  //   updated_entry: updated_entry
  // })

  res.send(update_body);
}
