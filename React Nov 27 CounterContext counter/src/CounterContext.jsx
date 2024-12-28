import { createContext,useState } from "react";
const myContext=createContext();
const CounterContext=({children})=>{
    const [cnt,setcnt]=useState(0);
    return(
        <>
        <myContext.Provider value={{cnt,setcnt}}>
        {children}
        </myContext.Provider>
        </>
    )
}

export default CounterContext;
export {myContext};