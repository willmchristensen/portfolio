import './NavBar.css'
import NavItem from './NavItem'
import { NavLink } from 'react-router-dom';
const NavBar = ({ isLoaded }) => {

    return(
        <div className="nav-container white-background">
            <nav className="nav">
                {/* <div className="arrow-left">
                            
                </div> */}
                <div className="arrow-right">
                    <div className="arrow-righ-1">
                                
                    </div>
                </div>
                <div className="arrow-diag-l">
                            
                </div>
                <div className="arrow-diag-r">
                            
                </div>
            </nav>
            <div className="nav-container white-background">
      <nav className="nav">
        <div className="triangle-container">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
          <div className="triangle triangle-3"></div>
        </div>
      </nav>
    </div>
        </div>
    )

}

export default NavBar
