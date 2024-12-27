// import { useState ,useEffect} from "react";
// const App=()=>{
//   const [count ,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(() => {
//       setCount(count+1)
//     }, 1000);
//   })

// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

//     return(
//         <>
//        <h1>My counter : {count}</h1>
        
//         </>
//     )
//   }
//   export default App;

// import { useState ,useEffect} from "react";
// const App=()=>{
//   const [count ,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(() => {
//       setCount(count+1)
//     }, 3000);
//   },[]);

//     return(
//         <>
//        <h1>My counter : {count}</h1>
        
//         </>
//     )
//   }
//   export default App;

// import { useState ,useEffect} from "react";
// const App=()=>{
//   const [cnt ,setCount]=useState(0);
//   const [multi,setMulti]=useState(0);
//   const mycounter=()=>{
//     setCount(cnt+1);
//   }
//   useEffect(()=>{
//     setMulti(cnt*2);
//   },[cnt])

//     return(
//         <>
//        <h1>My counter : {cnt}</h1>
//        <h2>Multiplication : {multi}</h2>
//        <button onClick={mycounter}>click here</button>
//         </>
//     )
//   }
//   export default App;

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=()=>{
    let api="https://jsonplaceholder.org/comments";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res);
    });
  }
  useEffect(()=>{
    loadData();
  },[])
  const ans =mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.id}</td>
        <td>{key.postId}</td>
        <td>{key.userId}</td>
        <td>{key.comment}</td>
      </tr>
      </>
    )
  })
 
    return(
        <>
       <h2>Live Api Data</h2>
       <table>
        <tr>
          <th>ID</th>
          <th>PostID</th>
          <th>UserID</th>
          <th>Comment</th>
        </tr>
        {ans}
       </table>
        </>
    )
  }
  export default App;