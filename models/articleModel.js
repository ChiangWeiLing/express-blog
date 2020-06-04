var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ex6-5', { useNewUrlParser: true } );

var articalSchema = new mongoose.Schema({
    account:String,
    name:String,
    type:String,
    title:String,
    content:String,
    like:Array,
    comment:Array,
    postdate:Date
});
articalSchema.set('collection','article');
var model = mongoose.model('article',articalSchema);

module.exports = model;