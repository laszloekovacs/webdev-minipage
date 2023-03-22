import { useState } from 'react'

/* components */
import Header from './Header'
import Parallax from './Parallax'
import LinkList from './LinkList'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <LinkList />
      <Footer />
    </div>
  )
}

export default App
