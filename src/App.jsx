import { useState } from 'react'

/* components */
import Header from './components/Header'
import Parallax from './components/Parallax'
import LinkList from './components/LinkList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="lightgradient">
      <Header />
      <Parallax />
      <LinkList />
      <Footer />
    </div>
  )
}

export default App
