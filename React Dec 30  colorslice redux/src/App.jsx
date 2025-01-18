import {useSelector,useDispatch} from  "react-redux";
import {changeColor} from  "./colorSlice";

const App=()=>{
  const mycolor=useSelector((state)=>state.mycolor.color);
  const dispatch = useDispatch();

  return(
    <>
     <h1> Color slice</h1>
     <button onClick={()=>{dispatch(changeColor())}}>click</button>
     <br />
     <br />
     <div style={{ width:"400px",height:"300px",background:mycolor}}>
          <h1 style={{textAlign:"center" ,paddingTop:100,color:"white"}}></h1>
     </div>
   
    </>
  )
}

export default App;