import { NavLink } from 'react-router-dom'
import './ui.css'
export const NavBar = () => {
  return (
    <div className="menu">
      <div className="menu-items flex-row center">
        <NavLink
          className={({ isActive }) =>
            `item-menu description ${isActive ? 'active' : ' '}`
          }
          to="/marvel"
        >
          Marvel
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `item-menu description ${isActive ? 'active' : ' '}`
          }
          to="/dc"
        >
          DC
        </NavLink>
      </div>

      <NavLink
        className={({ isActive }) =>
          `item-menu-button description ${isActive ? 'active' : ' '}`
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  )
}
