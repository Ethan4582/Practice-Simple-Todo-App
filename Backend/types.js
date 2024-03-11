// the types for excpecting to use fill it 

const zod =require("zod");

const createTodo = zod.object({
   title: zod.string(),
   description : zod.string()
})

const updateTodo = zod.object({
   id: zod.string(),
   
})

// this how export the  varabile from one file to another 

module.exports={
   createTodo: createTodo,
   updateTodo:updateTodo
}