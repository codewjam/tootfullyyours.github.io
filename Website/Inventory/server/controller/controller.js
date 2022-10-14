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
        quantity:req.body.quantity,
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
    Itemdb.find()
    .then(item =>{
        res.send(item)
    })
    .catch(err =>{
        res.status(500).send({ message : err.message || "Error Occured  while retrieving item information"})
    })
}

//Update a new identified item by item id
exports.update = (req,res) =>{
    if(!req.body){
        return res
            .status(400)
            .send({ message: "Data to update can not be empty"})
    }
    
    const id = req.params.id;
    Itemdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404).send({message:`Cannot Update Item with ${id}. Maybe item not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error Update item information"})
        })


}

//Delete a item with specified item id in the request
exports.delete = (req, res)=>{
    const id = req.params.id; 

    Itemdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message:"Item was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Item with id=" + id
            });
        });
}

//Update a new identified item by item id
exports.update = (req,res) =>{
    
}

//Delete an item with specified item id in the request
exports.delete = (req,res) =>{

}