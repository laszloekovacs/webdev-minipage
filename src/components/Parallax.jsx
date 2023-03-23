import React, { useEffect, useRef, useState } from 'react'
import parallax from './Parallax.module.scss'

const Parallax = (props) => {
  const [scroll, setScroll] = useState(0)

  /* generate filenames */
  let planes = []
  const numPlanes = props.planes | 5

  for (let i = 0; i < numPlanes; i++) {
    planes = [...planes, `./plates/p${i}.png`]
  }

  /* handle scroll event */
  const handleScroll = (event) => {
    setScroll(window.scrollY)
  }

  /* add window scroll event handler */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  /* generate plates */
  const list = planes.map((plane, i) => {
    return (
      <div
        key={i}
        className={parallax.bg}
        style={{
          backgroundImage: `url(${plane})`,
          transform: `translateY(${window.scrollY * 2 * (i / 15)}px)`,
          opacity: `${100.0 / window.scrollY}`,
        }}
      ></div>
    )
  })

  /* render */
  return <section className={parallax.section}>{list}</section>
}

export default Parallax
