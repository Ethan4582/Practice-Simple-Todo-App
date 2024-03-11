
// this is to render the component  and to put it on the screen 
// we need to take todos as input the  update so take as 
/*
here todo will be an array
odos=[{
   title: " go to gym ",
   description:"  i wil go to gym"
}, {
   title: " go to gym ",
   description:"  i wil go to gym"
}]
*/

export  function Todos({todos}){
   
   return <div>
      {todos.map((todo)=>{
         return <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <h1>{todo.completed == true ? "completed " : "Mark as Completed"}</h1>

</div>
      })}

   </div>
}