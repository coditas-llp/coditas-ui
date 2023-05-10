import React from 'react'

import './NavBar.scss'

interface MenuItem {
  label: string
}

interface NavBarProps {
  logo: string
  menuItems: MenuItem[]
}

const NavBar: React.FC<NavBarProps> = ({ logo, menuItems }) => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <div className={`navbar-wrapper`}>
      <div className='navbar_container'>
        <div className='coditas_logo_container'>
          <img className={'coditas_logo'} src={logo} alt='logo' />
        </div>

        <div className={`navbar_links_container ${showMenu ? 'show' : 'hide'}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item`}>
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
