// const Cybrom=({nm ,ct,children})=>{
//     // const College=({props})=>{
//         return( 
//            <>   
//             <h1>This is cybrom comonent</h1>
//             <h1>name : {nm}</h1>
//             <h1>name : {ct}</h1>
//             {children}
            
//           </>
//         )
//       }
      
//       export default Cybrom;

// const Cybrom=({children})=>{
//         return( 
//            <>   
            
//           <h1 style={{color:"red"}}>{children}</h1>  
            
//           </>
//         )
//       }
      
//       export default Cybrom;

// const Cybrom=({children})=>{
//     return( 
//        <>   
        
//       <h1 >{children}</h1>  
        
//       </>
//     )
//   }
  
//   export default Cybrom;

const Cybrom=(props)=>{
  return( 
     <>   
      
    <h1 style={{textAlign:"center"}}>My Name : {props.Name}</h1>  
    <h1 style={{color:"red", textAlign:"center" }}>My City : {props.city}</h1>  
    <h1 style={{color:"red", textAlign:"center" }}>My Fees : {props.Fees}</h1>  
      
    </>
  )
}

export default Cybrom;