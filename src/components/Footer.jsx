import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2>LOGO</h2>
      <p>2023 - Laszlo Kovacs</p>
      <p>Made with some of the tools listed</p>
      <a href="http://github.com/laszloekovacs"></a>
    </footer>
  )
}

export default Footer
