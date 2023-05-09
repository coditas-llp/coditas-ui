import React from 'react'

import './NavBar.scss'

const NavBar: React.FC = (props: any) => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <div className={`navbar-wrapper`}>
      <div className='navbar_container'>
        <div className='coditas_logo_container'>
          <img className={'coditas_logo'} src={props.logo} alt='logo' />
        </div>

        <div className={`navbar_links_container ${showMenu ? 'show' : 'hide'}`}>
          <ul>
            {props.menuItems.map((item: any, index: any) => (
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
