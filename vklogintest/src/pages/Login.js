import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthProvider";
const Login = () =>{
    const { login } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    

    const handleLogin = (e)=>{
        e.preventDefault()
        login('dcdscsdcsd')
        navigate('/lk')

    }
    return(
        <div>
            <form>
                <label htmlFor="email">Email</label>
                <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                <input type="submit" onClick={handleLogin} />
            </form>
        </div>
    )
}
export default Login;