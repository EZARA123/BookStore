const {Author} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const authors = await Author.findAll();
    res.render('author/view_all', {authors});
}
//profile

//render add

//add

//render edit

//edit

//delete