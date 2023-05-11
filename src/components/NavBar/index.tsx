import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.scss'

interface MenuItem {
  label: string
  route: string
}

interface NavBarProps {
  logo: string
  menuItems: MenuItem[]
  bgColor?: string
}

const NavBar: React.FC<NavBarProps> = ({ logo, menuItems, bgColor }) => {
  const history = useNavigate()
  const [showMenu, setShowMenu] = React.useState(false)
  const [changeColor, setChangeColor] = React.useState(false)

  const backgroundChange = () => {
    const offset = window.scrollY
    if (bgColor === 'transparent') {
      offset > 25 ? setChangeColor(true) : setChangeColor(false)
    } else {
      offset > 550 ? setChangeColor(true) : setChangeColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', backgroundChange)
  })

  return (
    <div
      className={`navbar-wrapper
     ${changeColor || showMenu ? 'change-color' : ''}
      ${
        bgColor
          ? bgColor === 'transparent' && (!changeColor ? 'bgTrans' : 'bgBlue')
          : ''
      }`}
    >
      <div className='navbar_container'>
        <div className='coditas_logo_container'>
          <img className={'coditas_logo'} src={logo} alt='logo' />
        </div>

        <div className={`navbar_links_container ${showMenu ? 'show' : 'hide'}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  history(item.route)
                }}
                className={`nav-item`}
              >
                {item.label}
              </li>
            ))}
            {/* onClick={() => { setShowMenu(false)}} */}
          </ul>
        </div>
        <div
          className={`menuColor`}
          id='menu-toggle'
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className='rect first'></div>
          <div className='rect hide'></div>
          <div className='rect second'></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
