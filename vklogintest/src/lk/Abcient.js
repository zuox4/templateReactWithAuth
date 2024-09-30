import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from 'axios'
const Abcient = ()=>{
    const [data] =useOutletContext()
    return(
        <div>
           {data.map((r)=><div>{r.fullName}</div>)}
        </div>
    )
}
export default Abcient;