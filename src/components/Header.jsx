import React from 'react'

const linkStyle = 'p-2 text-gray-700 hover:text-gray-900'

const Header = () => {
  return (
    <nav className="flex flex-row gap-64 text-white p-2">
      <h1 className="text-xl">LOGO</h1>

      <div className="flex flex-row text-lg">
        <a className={linkStyle} href="/">
          home
        </a>
        <a className={linkStyle} href="#contact">
          contact
        </a>
        <a className={linkStyle} href="http://github.com/laszloekovacs">
          github
        </a>
      </div>
    </nav>
  )
}

export default Header
