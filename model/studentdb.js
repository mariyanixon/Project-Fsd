//import mongoose
const mongoose=require('mongoose');
//connect by cpoying link from database(mongodb.com)
mongoose.connect("mongodb+srv://mariyanixon:mariyanixon@cluster0.fcvdevs.mongodb.net/?retryWrites=true&w=majority")
//to check the connection
.then(()=>{
    console.log("db connect")
})
.catch(err=>console.log(err));

//create a schema to know what the database is needed or there is room for data base

let Schema = mongoose.Schema;
//create an instance

const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})

//wraping and add to a variable

var studentModel = mongoose.model("students",studentSchema);
//exporting

module.exports=studentModel

