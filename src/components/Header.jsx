import React from 'react'

const linkStyle = 'p-2 text-gray-700 hover:text-gray-900'

const Header = () => {
  return (
    <nav>
      <h1>LOGO</h1>
      <div>
        <a href="#">home</a>
        <a href="#contact">contact</a>
        <a href="http://github.com/laszloekovacs">github</a>
      </div>
    </nav>
  )
}

export default Header
