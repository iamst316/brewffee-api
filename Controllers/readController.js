const { coffeeModel } = require("../Models/coffeeSchema");

module.exports.readRandomOne = async (req, res) => {
  try {
    const list = await coffeeModel.find();
    const length_list = list.length;
    const random_index = Math.floor(Math.random() * length_list);

    res.send(list[random_index]);
  } catch (err) {
    console.error(err);
  }
};

module.exports.readByQuery = async (req, res) => {
  try {
    const { name, loc,bean } = req.query;
    const regex = new RegExp(name, 'i');

    const filtered_results = await coffeeModel.find({$or: [{name: regex},{"manufacturer.loc": loc},{"brew.base.bean": bean}] });

    res.send(filtered_results);
  } catch (err) {
    console.error(err);
  }
};

module.exports.readByPagination = async (req,res) =>{
    try{
        let {limit_per_page,page} = req.query;
        if(!page){
            page = 1;
        }

        const list = await coffeeModel.find();
        const length_list = list.length;
        const start_idx = (page-1)*limit_per_page;
        const end_idx = page*limit_per_page;
        const total_possible_pages = Math.ceil(length_list/limit_per_page);

        if(page>total_possible_pages) {
            res.send({
                message: "Page Value Exceeds Maximum!!!"
            })
        }

        const paginated_list = list.slice(start_idx,end_idx);

        res.send(paginated_list);

    }catch(err){
        console.error(err);
    }
}