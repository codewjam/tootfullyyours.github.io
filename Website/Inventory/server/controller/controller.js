var Itemdb = require('../model/model');

// create and save a new item
exports.create = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }
    
    //new item
    const item = new Itemdb({
        itemname:req.body.itemname,
        room:req.body.room,
        model:req.body.model,
        serialnumber:req.body.serialnumber,
        place:req.body.place,
        date:req.body.date,
        quantity:req.body.quatity,
        price:req.body.price
    })

    //save item in the database
    item
        .save(item)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occured while creating a create operation"
            });
        });
}

//retrieve and return all items/retrieve and return  a single item
exports.find = (req, res)=>{

}

//Update a new identified item by item id
exports.update = (req,res) =>{

}

//Update a new identified item by item id
exports.update = (req,res) =>{
    
}

//Delete an item with specified item id in the request
exports.delete = (req,res) =>{

}