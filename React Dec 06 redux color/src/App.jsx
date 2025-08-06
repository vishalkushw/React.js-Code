import {useSelector,useDispatch} from  "react-redux";
import {changeColor} from  "./colorSlice";

const App=()=>{
  const myclr=useSelector((state)=>state.mycolor.color);
  const dispatch = useDispatch();

  return(
    <>
     <h1> well come to my app</h1>
     <button onClick={()=>{dispatch(changeColor())}}>click</button>
     <br />
     <br />
     <div style={{width:"300px",height:"300px",background:myclr }}>
          <h1 style={{textAlign:"center" ,paddingTop:100,color:"white"}}>Vishal Kushwah</h1>
     </div>
   
    </>
  )
}

export default App;
