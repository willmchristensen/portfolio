import './NavBar.css'
import NavItem from './NavItem'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar = ({ isLoaded }) => {

  const [isrotated, setrotated] = useState();

  const rotate = isrotated ? 'rotated' : 'arrow';

  const handleClick = () => {
    setrotated(!isrotated)
  }

  return (
    <div className="nav-container white-background">
      <nav className="nav">
        {/* <div className="arrow-left">

                </div> */}
        <div className="box">
          <div className="arrow right">

          </div>
          <div className="arrow right">

          </div>
          <div className="arrow right ">

          </div>

        </div>
        <div className="arrow righ-1 twist">

        </div>
        <div className="arrow righ-1">

        </div>
        <div className="arrow diag-l">

        </div>
        <div className="arrow diag-r">

        </div>
        <div className="arrow righ-1">

        </div>
        <div className="arrow diag-l">

        </div>
        <div className="arrow diag-r">

        </div>
        <div className="arrow righ-1">

        </div>
        <div className="arrow diag-l">

        </div>
        <div className="arrow diag-r">

        </div>
        <div className="arrow righ-1">

        </div>
        <div className="arrow diag-l">

        </div>
        <div className="arrow diag-r">

        </div>
        <div className="arrow righ-1">

        </div>
        <div className="arrow diag-l">

        </div>
        <div className="arrow diag-r">

        </div>
      </nav>
    </div>
  )

}

export default NavBar
