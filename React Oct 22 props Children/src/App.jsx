
// const App=()=>{
//   return(
//     <h1>This is My First React App  ....Create by Vishal </h1>
    
//   )
// }

// export default App;


// import React from "react";
// const data=React.createElement("h1",{},"well come to bhopal");
// const data=(<h1> well come to bhopal </h1>); 
// const name="vishal ";  
// const age=23;


// const App=()=>{
//   return(
//     <h1> Hellow frinds my name is {name} and age is {age} </h1>   //jsx 
    
//   )
// }

// export default App;


// import React from "react";

// const sub =(<ol>

// <li>PHP</li>
// <li>CSS</li>
// <li>ASP</li>
// <li>java</li>
// <li>XML</li>

// </ol>)


// const App=()=>{
//   return(
//     <h1> Our computer are : {sub} </h1>  
    
//   )
// }

// export default App;


//fragment <>    extra node note making using fragment
// const App=()=>{
//   return(
//      <>   
//     <p>
//      <h1> we are web developer </h1>  
//      <h1> hellow frinds </h1>  
//     </p>

//       <h1>well come to bhopal</h1>
//     </>
//   )
// }

// export default App;



//element must be close

// const App=()=>{
//   return(
//      <>   
//     <h1>Application form</h1>
//     Name : <input type="text" />
//     <br />

//     city : <input type="text" />
//     <hr size="4" color="red"/>
//     <button>save</button>
//     </>
//   )
// }

// export default App;



// import College from "./College";
// import Cybrom from "./Cybrom";

// const App=()=>{
//   return(
//      <>   
//        <h1>we are college student</h1>
//        <College nm="vishal" ct="Bhopal" cls="btech"/>

//        <Cybrom nm="vsk" ct="indore">

//         <p>Happy diwali</p>
//        </Cybrom>
//     </>
//   )
// }

// export default App;


// import Cybrom from "./Cybrom";

// const App=()=>{
//   return(
//      <>   
//        <Cybrom nm="vsk" ct="indore">

//         <p>Happy diwali</p>
//        </Cybrom>
//     </>
//   )
// }

// export default App;


// import Cybrom from "./Cybrom";
// const stunm="Vishal";
// const stuct="Indore";
// const stufees=45000;
// const App=()=>{
//   return(
//      <>   
       
//     <h1>Well come to data</h1>
        
//        <Cybrom Name={stunm} city={stuct} Fees={stufees}/>
//     </>
//   )
// }

// export default App;


import Cybrom from "./Cybrom";

const student={

stunm:"Vishal",
stuct:"Indore",
stufees:45000

}
const App=()=>{
  return(
     <>   
       
    <h1 style={{color:"red", textAlign:"center" }}>Well come to data</h1>
    <h1 id="demo">Well come to data</h1>
        
       <Cybrom
       
       Name={student.stunm}
       city={student.stuct}
       Fees={student.stufees}
       
       />
    </>
  )
}

export default App;