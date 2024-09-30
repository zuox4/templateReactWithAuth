import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthProvider";
import ProtectedRoute from "../contexts/ProtectedRoute";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import axios from "axios";
const Root = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [points, setPoints] = useState(0)
    useEffect(()=>{
        axios.get('http://91.77.160.177:4001/get_info_mentor/1').then(data=>{
            setData(data.data.students)
        }).catch(error=>{
            console.log(error)
        })
    },[])
  
  return (
    <div>
        <Header points={points}/>
        <div style={{marginTop:'40px'}}>
          <ProtectedRoute element={<Outlet context={[data]}/>}/>
        </div>
         
         <Footer/>
    </div>
  );
}
export default Root;