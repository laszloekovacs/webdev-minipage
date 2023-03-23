import { useState } from 'react'

/* components */
import Header from './Header'
import Parallax from './Parallax'
import LinkList from './LinkList'
import Footer from './Footer'

import style from './App.module.scss'

function App() {
  return (
    <div>
      <div className={style.app}>
        <Header />
        <Parallax />
        <LinkList />
      </div>
      <Footer />
    </div>
  )
}

export default App
