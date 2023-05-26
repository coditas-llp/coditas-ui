import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './NavBar.scss'
import coditas_white from 'coditas_white.png'
import coditas_blue from 'coditas_blue.png'
// import MobileNavImg from './image.svg';

interface MenuItem {
  label?: string
  href?: string
  activeRoute?: boolean
  route?: string
}

interface NavBarProps {
  logoWhite?: string
  logoBlue?: string
  menuItems?: MenuItem[]
  onLogoClicked?: () => void
  bgColor?: string
  colorChangeAt?: number
}

const NavBar: React.FC<NavBarProps> = ({
  logoWhite,
  logoBlue,
  menuItems,
  bgColor,
  onLogoClicked,
  colorChangeAt
}) => {
  const history = useNavigate()
  const location = useLocation()

  const [showMenu, setShowMenu] = React.useState(false)
  const [changeColor, setChangeColor] = React.useState(false)

  const backgroundChange = () => {
    const offset = window.scrollY
    if (bgColor === 'transparent') {
      offset > (colorChangeAt || 25)
        ? setChangeColor(true)
        : setChangeColor(false)
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
          : 'bgBlue'
      }`}
    >
      <div className='navbar_container'>
        <div className='coditas_logo_container'>
          <img
            className={'coditas_logo'}
            src={
              !changeColor
                ? logoWhite || coditas_white
                : logoBlue || coditas_blue
            }
            onClick={onLogoClicked}
            alt='logo'
          />
        </div>

        <div className={`navbar_links_container ${showMenu ? 'show' : 'hide'}`}>
          <ul>
            {menuItems?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  if (item.href) {
                    window.location.href = item.href
                    return
                  }
                  history(item.route ? item.route : '')
                }}
                className={`nav-item ${
                  location.pathname === item.route ? 'active' : ''
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
          {/* <div className='mobile_nav_image'>
                <img src={MobileNavImg} alt='' />
          </div> */}
        </div>
        <div
          className={`menuColor ${showMenu ? 'open' : ''} ${
            !changeColor ? '' : 'menu-blue'
          }`}
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
