const express =require ("express");
//require('dotenv').config();
const { createTodo, updateTodo } = require("./types");
   // this you import what is exported 
const{todo} =require("./db.js");
const cors =require ("cors");
const app= express();

app.use(express.json());
app.use(cors());

//!zod for vailadtion 

app.post("/todo", async function(req,res){
   const createpayload =req.body;
   const parsedpayload=createTodo.safeParse(createpayload);
   if(!parsedpayload.success){
      res.status(411).json({
         msg:" You have sent the wrong input ",
      })
      return ;
   }
   //put in mongodb
    await todo.create({
      title: createpayload.title,
      description: createpayload.description,
      completed: false
      // instarting it has to be false evently amke it true  when  shown  in frontend 

   })
   // if data base call is succesfull   the we gic the message because of async andf await 
   res.json({
      msg: "todo  created "
   })
})


app.get("/todos",  async function(req,res){
  //! const todos = todo.find({}) 
  // if i write i like this i won ge the data insted proise eveentually   so need to make it await 
  //so definatly need to make sure we wait until we ge the data 
  const todos = await todo.find({
   // this is empyty object if i wanted some particular todo we can defime gher like title: " some title"

});
// this give data on frontend 
res.json({
   todos: "the todo has been created "
})


})

app.put("/competed", async function(req, res){
   const upadtepayload =req.body();
   const parsedpayload =updateTodo.safeParse(upadtepayload);
   if (!parsedpayload.success){
      res.status(411).json({
         msg:" you have sen the rong input "
      })
      return ;
   }

   await  todo.update({
      _id:req.body.id
      // this is syntax to upadte something in data base as the changes made fom the  frontend 
   },{
      completed: true
   })
   res.json({
      msg:"todo maeked as compeletd "
   })

})


// whenever i am  puting todos  i  an creted an entry in databse with  the  id 

app.listen(3000, () => {
   console.log(`Server is running on port ${3000}`);
 });