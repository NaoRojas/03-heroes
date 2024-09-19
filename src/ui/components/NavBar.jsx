import { NavLink, useNavigate } from 'react-router-dom'
import './ui.css'
export const NavBar = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    })
  }

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
        onClick={onLogout}
        to="/login"
      >
        Logout
      </NavLink>
    </div>
  )
}
