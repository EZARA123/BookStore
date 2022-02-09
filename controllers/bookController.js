const {Book} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const books = await Book.findAll();
    res.render('book/view_all', {books});
}

//profile

//render add form

//add

//render edit form

//update

//delete