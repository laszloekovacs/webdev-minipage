import { useState } from 'react'

/* components */
import Header from './Header'
import Parallax from './Parallax'
import LinkList from './LinkList'
import Footer from './Footer'

function App() {
  return (
    <main>
      <Header />
      <Parallax />
      <LinkList />
      <Footer />
    </main>
  )
}

export default App
