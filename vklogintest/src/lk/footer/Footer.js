import { Link } from 'react-router-dom';
import './Footer.css'
import { useContext } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
const Footer = () =>{
    const {logout} = useAuth()
    return(
        <div className="footer">
            <Link to={''}>Профиль</Link>
            <Link to={'abcient'}>Отсутствующие</Link>
            <Link to={'outs'}>Выходы</Link>
            <div onClick={()=>logout()}>Выйти из акк</div>

        </div>
    )
}
export default Footer;