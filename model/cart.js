const mongoose = require("mongoose")

var cartSchema = mongoose.Schema({
    user: String,
    item: String,
    qty: Number
})

var Cart = mongoose.model("cart", cartSchema)

exports.create = function(cart){
    return new Promise(function(resolve,reject){
        // console.log(review)
        var r = new Reviews(cart)

        r.save().then((newCart)=>{
            // console.log(newCart)
            resolve(newCart)
        }, (err)=>{
            reject(err)
        })
    })
}

exports.getAll = function(){
    return new Promise(function(resolve, reject){
        Reviews.find().then((cart)=>{
            // console.log(reviews)
            resolve(cart)
        }, (err)=>{
            reject(err)
        })
    })
}

exports.deleteId = function (id){
    return new Promise(function(resolve, reject){
        Reviews.deleteOne({_id: id
        }).then((poreviewsst)=>{
            console.log("Deleted: ",  poreviewsst)
        },(err)=>{
            reject(err)
        })
    })
}

exports.delete = function (id){
    return new Promise(function(resolve, reject){
        Reviews.deleteOne({username: id
        }).then((poreviewsst)=>{
            console.log("Deleted: ",  poreviewsst)
        },(err)=>{
            reject(err)
        })
    })
}

exports.edit = function(id, cart){
    return new Promise(function(resolve, reject){
        Reviews.findOneAndUpdate({_id:id}, cart).then((cart)=>{
            resolve(cart)
        }, (err)=>{
            reject(err)
        })
    })
}

exports.getUser = function(username){
    return new Promise(function(resolve, reject){
        Reviews.find({user:username}).then((item)=>{
            resolve(item)
        }, (err)=>{
            reject(err)
        })
    })
}