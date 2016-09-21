var mongoose = require("mongoose"),
 Schema = mongoose.Schema;
 var UserSchema = new Schema({
	 username:{type:String,unique:true},
	 email:String,
	 color:String,
	 hashed_passsword:String
 });
 mongoose.model('User',UserSchema);