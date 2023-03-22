import React from 'react'
import p1 from '../assets/pages/p1.png'
import parallax from './parallax.module.scss'

const Parallax = () => {
  return (
    <div>
      <section className={parallax.section}>
        <div
          className={parallax.bg}
          style={{
            backgroundImage: `url(${p1})`,
          }}
        ></div>
      </section>
    </div>
  )
}

export default Parallax
