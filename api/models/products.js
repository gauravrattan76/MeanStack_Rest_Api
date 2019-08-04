var mongoose = require('mongoose');
var schema = mongoose.Schema;

var garvSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId:Number,
    productName:String
});

var garv = mongoose.model('garvModel',garvSchema);

module.exports = garv;