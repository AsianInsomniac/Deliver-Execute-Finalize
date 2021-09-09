const db = require('../model/db.js');
const product = require('.../model/product.js');

exports.addBook = function (req,res)  {
    const { title, author, genre, bNo, qty} = req.body;
    
    books.findOne({ BookNo : bNo })
        .then(book => {
            if(book){
                res.redirect('addBook')
            }
            else{
                const newBook = new books({
                    Title: title,
                    Author: author,
                    Genre: genre,
                    BookNo: bNo,
                    Qty: qty,
                    
                });
               
                newBook.save()
                .then(book => {
                    res.redirect('addBook')
                })
                .catch(err => console.log(err));
  
            }

        });
    
}