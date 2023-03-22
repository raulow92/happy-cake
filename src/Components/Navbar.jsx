import { NavLink } from "react-router-dom";
import Muffin from '../assets/muffin.svg'

const Navbar = () => {
    return (
        <div className="container-navbar">
            <div className="navbar">
                <div className="navbar-l">
                    <img src={Muffin} alt="logo happy cake" className="muffin-logo"/>
                    <h1>Happy Cake</h1>
                </div>
                <div className="navbar-r">
                        <ul>
                            <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                            <li><NavLink to="contact" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar