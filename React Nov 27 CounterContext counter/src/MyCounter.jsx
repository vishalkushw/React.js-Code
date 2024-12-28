import { useContext } from "react";
import { myContext } from "./CounterContext";
const Mycounter=()=>{
    const [cnt,setcnt]=useState(myContext);
    return(
        <>
        <h1>my counter app</h1>
        <button onClick={()=>{setcnt(cnt+1)}}>Increment</button>
        <h1>{cnt}</h1>
        <button onClick={()=>{setcnt(cnt-1)}}>Decrement</button>
        </>
    )
}

export default Mycounter;