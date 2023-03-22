import React from 'react'
import parallax from './parallax.module.scss'

const Parallax = (props) => {
  /* generate filenames */
  let planes = []

  const numPlanes = props.planes | 5

  for (let i = 0; i < numPlanes; i++) {
    planes = [...planes, `./plates/p${i}.png`]
  }

  const list = planes.map((plane, i) => {
    return (
      <div
        key={i}
        className={parallax.bg}
        style={{
          backgroundImage: `url(${plane})`,
        }}
      ></div>
    )
  })

  return (
    <section className={parallax.section}>
      <div>{list}</div>
    </section>
  )
}

export default Parallax
