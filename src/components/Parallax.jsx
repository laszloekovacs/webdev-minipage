import React from 'react'
import parallax from './parallax.module.scss'

const Parallax = (props) => {
  /* generate filenames */
  let planes = []

  const numPlanes = props.planes | 4

  for (let i = 0; i < numPlanes; i++) {
    planes = [...planes, `./public/plates/p${i}.png`]
  }

  console.log(planes)

  const list = planes.map((plane, i) => {
    return (
      <section key={i} className={parallax.section}>
        <div
          className={parallax.bg}
          style={{
            backgroundImage: `url(${plane})`,
          }}
        ></div>
      </section>
    )
  })

  return <div>{list}</div>
}

export default Parallax
