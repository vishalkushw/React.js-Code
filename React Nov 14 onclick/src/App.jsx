//  const App=()=>{
//  const display=()=>{
//   alert("This is alert box");
//  }
//   return(
//     <>
//       <h1>Well come Vishal kushwah</h1>
//       <button onClick={display}>click here</button>

//     </>
//   )
// }
// export default App


// const App=()=>{
//   const myname=(nm)=>{
//    alert(`my name is :${nm}`);
//   }
//    return(
//      <>
//        <h1>Well come Vishal kushwah</h1>
//        <button onClick={()=>{myname("Vishal")}}>click here</button>
 
//      </>
//    )
//  }
//  export default App



// const App=()=>{
//   const myname=(nm,e)=>{
//     console.log(e);
//    alert(`my name is :${nm} Event : ${e.type}`);
//   }
//    return(
//      <>
//        <h1>Well come Vishal kushwah</h1>
//        <button onClick={(e)=>{myname("Vishal",e)}}>click here</button>
 
//      </>
//    )
//  }
//  export default App

// const App=()=>{
//   const myname=(e)=>{
//    alert("Hii friend Event : " + e.type);
//   }
//    return(
//      <>
//        <h1>Well come Vishal kushwah</h1>
//        <button onClick={myname}>click here</button>
 
//      </>
//    )
//  }
//  export default App



// const App=()=>{
//   const myname=(e)=>{
//     console.log(e);
//    let nm=e.target.name;
//    let val=e.target.value;
//    alert("Nmae : "+nm +"Value : "+val);
//   }
//    return(
//      <>
//        <h1>Well come Vishal kushwah</h1>
//        <button name="btn1"  value="mybutton" onClick={myname}>click here</button>
 
//      </>
//    )
//  }
//  export default App

// const App=()=>{
//   const getval=(e)=>{
//    let nm=e.target.name;
//    let val=e.target.value;

//    console.log({Nmae:nm , Value : val});
//   }
//    return(
//      <>
//        <h1>Well come Vishal kushwah</h1>
//        <input type="text" name="city" onChange={getval}/>
 
//      </>
//    )
//  }
//  export default App



// const app =()=>{

//   const display=(e)=>{
//     const nm=e.target.name;
//     const val=e.target.value;

//     console.log({Name:nm ,value:val});
//   }
//     return(
//       <>
//          <h1>Well come vishal</h1>
//          <input type="text"  name="vishal" onChange={display}/>
//       </>
//     )
// }

// export default app;


const app=()=>{

  const demo=(e)=>{
    const nm=e.target.name;
    const val=e.target.value;

    console.log({name:nm ,value:val});
  }
  return(
      <>
        <h1>I am a cybrom student</h1>
        <input type="text" name="cybrom" onChange={demo}/>


      </>
  )
}
export default app;