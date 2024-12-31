// import { useState } from "react";

// const App=()=>{
//   const [mynum,setMynum]=useState=(0);
//   const [nm,setnm]=useState=("");

//   const heaveyFun=usemeno(()=>{
//     for(var i=0;i<=1000000000; i++){

//     }
//     return mynum*2;

//   },[mynum])
  

//   return(
//     <>
//       <h1>Welcome to my form</h1>
//       <h1>{heaveyFun} </h1>
//       <input type="number"  value={mynum} onChange={(e)=>{setMynum(e.target.value)}}/>
//       <input type="text"  value={nm} onChange={(e)=>{setnm(e.target.value)}}/>
//     </>
//   )
// }
// export default App;

import { useState } from "react";

const App=()=>{
  const [mynum,setMynum]=useState=(0);
  const [nm,setnm]=useState=(100);

  const multi=useMeno(()=>{
    console.log("*******");
    return mynum*3;

  },[mynum])
  

  return(
    <>
      <h1>Welcome to cybrom student</h1>
      <h1>my mulification : {multi}</h1>
      <h1>My Increment</h1>
 
    </>
  )
}
export default App;