import './NavBar.css'
import NavItem from './NavItem'
import { NavLink } from 'react-router-dom';
const NavBar = ({ isLoaded }) => {

    return(
        <div className="nav-container white-background">
            <nav className="nav">
                <div className="nav-section">
                    <div className="logo">
                        <NavLink
                            to='/'
                        >
                            <i class="fas fa-yin-yang"></i>
                        </NavLink>
                    </div>
                    <NavItem
                        url={"/about-me"}
                        text={"About Me"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/skills"}
                        text={"skills"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/projects"}
                        text={"Projects"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/contact"}
                        text={"Contact"}
                    >
                    </NavItem>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
