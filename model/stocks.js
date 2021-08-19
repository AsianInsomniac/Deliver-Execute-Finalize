const mongoose = require("mongoose")

var stockSchema = mongoose.Schema({
    item: String,
    qty: Number,
    image: String,
    info: String
})

var Stock = mongoose.model("stocks", stockSchema)

exports.create = function(stock){
    return new Promise(function(resolve,reject){
        // console.log(stock)
        var r = new Reviews(stock)

        r.save().then((newStock)=>{
            // console.log(newStock)
            resolve(newStock)
        }, (err)=>{
            reject(err)
        })
    })
}

exports.getAll = function(){
    return new Promise(function(resolve, reject){
        Reviews.find().then((stock)=>{
            // console.log(stock)
            resolve(stock)
        }, (err)=>{
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

exports.edit = function(id, stock){
    return new Promise(function(resolve, reject){
        Reviews.findOneAndUpdate({_id:id}, stock).then((stock)=>{
            resolve(stock)
        }, (err)=>{
            reject(err)
        })
    })
}
