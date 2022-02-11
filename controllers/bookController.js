const {Book} = require('../models');
const genres = ['Action and Adventure', 'Comedy', 'Fantasy', 'Mystery', 'Drama'].sort();

//view all
module.exports.viewAll = async function(req,res){
    const books = await Book.findAll();
    res.render('book/view_all', {books});
};

//profile
module.exports.viewProfile = async function(req,res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/profile', {book});
};

//render add form
module.exports.renderAddForm = function(req, res){
    const book = {
        title: '',
        author: '',
        publisher: '',
        genre: genres[0],
        pages: '',
        description: '',
        image: ''
    }
    res.render('book/add', {book, genres});
}

//add
module.exports.addBook = async function(req, res){
    const book = await Book.create(     {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        description: req.body.description,
        image: req.body.image
    });
    res.redirect(`/books/profile/${book.id}`);
}
//render edit form
module.exports.renderEditForm = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/edit', {book, genres});
}

//update
module.exports.updateBook = async function(req, res) {
    const book = await Book.update({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        description: req.body.description,
        image: req.body.image,
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/books/profile/${req.params.id}`);
}

//delete
module.exports.deleteBook = async function(req, res){
    await Book.destroy(  {
        where: {
            id:req.params.id
        }
        });
    res.redirect('/books');
}