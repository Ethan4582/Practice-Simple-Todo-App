// defining the schema   for database 
const mongooese = require("mongoose");

//in  professional project   we we put you mongoes url in .env 

mongooese.connect("your woen MonoDburl")

//mongoose.connect(process.env.MONGODB_URI);


const todoSchema = mongooese.Schema({
   title :String,
   description: String,
   completed: Boolean
})

const todo = mongooese.model('todos', todoSchema);
module.exports={
   todo:todo
}

