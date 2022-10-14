
exports.homeRoutes = (req,res) =>{
    res.render('index');
}

exports.add_item = (req,res) =>{
    res.render('add_item');
}

exports.update_item = (req,res) =>{
    res.render('update_item');
}