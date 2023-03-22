import { useState } from 'react'

/* components */
import Header from './Header'
import Parallax from './Parallax'
import LinkList from './LinkList'
import Footer from './Footer'

function App() {
  return (
    <>
      <div>
        <Header />
        <Parallax />
        <LinkList />
      </div>
      <Footer />
    </>
  )
}

export default App
