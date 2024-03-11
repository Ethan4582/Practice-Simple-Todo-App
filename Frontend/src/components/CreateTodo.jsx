
//! Component are like Like nut not you own html component 
//This is not html but Xml 

import { useState } from "react";


//Cleaner way to connect local host 3000  is by creatinh loacl state varaible 

const [title,setTitle] =useState("");
const [description,setDescription] =useState("");
//the reson it is empty is beacuse we are using  target .value  topass the dom 


export function CreateTodo(){
   return <div>
      
      <input id="title" style={{
         padding:10,
         margin:10
      }}
      type="text" placeholder="title" onChange={(e)=>{
         const value =e.target.value;
         setTitle(e.target.value);
      }}></input> <br />
      <input   id="title" style={{
         padding:10,
         margin:10
      }}
      type="text" placeholder="description " onChange={(e)=>{
         const value =e.target.value;
         setDescription(e.target.value);
         }}></input> <br />

      <button style={{
         padding:10,
         margin:10
      }}
      onClick={()=>{

         //! This thinh is much cleaner using Axios  library
         
   fetch("https://loaclhost:3000/todo",{
      method:"POST",
      body:JSON.stringify({
         title: title, // document.getElementById().innerHTML,  is one way to paa the todos
         description: description
      }),
      headers:{
         "content-type":"application/json"
      }
   }
   )

   .then(async (res)=>{
     const json =await res.json();
     //here we pass the upadted array by takeing the new  set of input from the user 
     alert("TODO IS ADDED");
   })
      }}
      > Add to todo</button>

   </div>
}