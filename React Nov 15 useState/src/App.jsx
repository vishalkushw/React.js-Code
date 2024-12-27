// const app=()=>{

// import { useState } from "react";


  
//   return(
//       <>
//         <h1>Application Form</h1>
//         <form>
//         Enter Name: <input type="text"/>
//         <br/>
//         Enter City: <input type="text"/>
//         <br/>
//         <button>save</button>
        
//         </form>

//       </>
//   )
// }
// export default app;



// import { useState } from "react";

// const app=()=>{
//      const [city,setcity]= useState("Bhopal");
//      const myval=()=>{
//         setcity="Indore";
//      }

  
//     return(
//         <>
//           <h1>Welcome to : {city}</h1>
//           <button onClick={myval}>Click here</button>
        
//         </>
//     )
//   }
//   export default app;





// import { useState } from "react";

// const App=()=>{
//      const [color,setColor] = useState("red");
   
//     return(
//         <>
//           <h1>my favorite color : {color}</h1>
//           <button onClick={()=>{setColor("yellow")}}>yellow</button>
        
//         </>
//     )
//   }
//   export default App;



// import { useState } from "react";

// const App=()=>{
//      const [color,setColor] = useState("red");
   
//     return(
//         <>
//           <h1 style={{color:color}}>My favourite color : {color}</h1>
//           <button onClick={()=>{setColor("yellow")}}>Yellow</button>
//           <button onClick={()=>{setColor("green")}}>Green</button>
//           <button onClick={()=>{setColor("orange")}}>Orange</button>
//           <button onClick={()=>{setColor("black")}}>Black</button>
        
//         </>
//     )
//   }
//   export default App;

import { useState } from "react";

const App=()=>{
     const [cnt,setCnt] = useState("0");

     const myInt=()=>{
            setCnt(cnt+1)
     }

     const myDcr=()=>{
    if(cnt<=0){
        alert("you can not Decrement less than zero");
    }
    else{
        setCnt(cnt-1);
    }
 }
   
    return(
        <>
          <h1>My counter : {cnt}</h1>
          <button onClick={myInt}>Increment</button>
          <button onClick={myDcr}>Decrement</button>
          <button onClick={()=>{setCnt(0)}}>Reset</button>
        
        </>
    )
  }
  export default App;