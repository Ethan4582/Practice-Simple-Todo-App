import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  // Define state for todos
  const [todos, setTodos] = useState([]);

  ///!The issue here  this send infiniter request for rendering of the dom
  // Here todos is the array of the input   , setodos are the new input form thrhe user that  need to be updated 

  /*
  ->  this is awrong way beacuse it send infinet request so it is bug 
  -> we can fix this using useeffect hook 


   fetch("https://loaclhost:3000/todos")
  .then(async (res)=>{
    const json =await res.json();
    //here we pass the upadted array by takeing the new  set of input from the user 
    setTodos(json.todos);
  })
  
  */
 

  return (
    <>
      <div>
        {/* Pass the todos state and setTodos function as props */}
        <CreateTodo></CreateTodo>
        {/* paasing the array of todos   and hitting backend and creating state varaible */}
        <Todos todos={[{
         
        }]}></Todos>
      </div>
    </>
  )
}

export default App
