

// const App=()=>{
//   const name=["Vishal","Pawan","Ram","Sandeep"];
//   const data=name.map((item)=>{

//     return(
//       <>
//        <h1>{item}</h1>
      
//       </>
//     )
    
//   })
//   return(
//     <>
   
//    {data}

//     </>
//   )
// }
// export default App



// const App=()=>{
//   const subject=["php","java","c++","mern"];
//   const ans=subject.map((key)=>{

//     return(
//       <>
//        <li>{key}</li>
      
//       </>
//     )
    
//   })
//   return(
//     <>
//      <h1>welcome</h1>
//    {ans}

//     </>
//   )
// }
// export default App


// const App=()=>{
//   const subject=["php","java","c++","mern"];
//   const ans=subject.map((key)=><option>{key}</option>)


//   return(
//     <>
//      <h1>welcome</h1>
//      {ans}

//     </>
//   )
// }
// export default App


const App=()=>{
  const subject=[
    {
       "rollno":121,
       "name":"vishal",
       "city":"bhopal"
    },

    {
      "rollno":122,
      "name":"pawan",
      "city":"indore"
   },

   {
    "rollno":123,
    "name":"ram",
    "city":"ujjain"
   },

   {
    "rollno":124,
    "name":"sandeep",
    "city":"vidisha"
   }


]

const ans=subject.map((key)=>{
  return(
      <>
         <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
         </tr>
      
      </>

  )
})


  return(
    <>
     <h1>welcome</h1>
      <table border="1px"> 
        <tr>
          <td>Rollno</td>
          <td>Name</td>
          <td>City</td>
        </tr>
        {ans}
      </table>

    </>
  )
}
export default App