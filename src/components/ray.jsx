import Estrella from "./Estrellas"
import { useState } from 'react'




function Ray({ avisaCambio, index }) {

  const stars = [1, 2, 3, 4, 5]
  const [raeting, setRaiting] = useState(0)
  const califica = (star) => {
    setRaiting(star);
    avisaCambio(index, star);
  }

  return (
    <>

      <div className="card">
        <div className="star" >
          {stars.map((star, i) => (
            <span className={star <= raeting ? "active" : "inactive"} key={i}><a onClick={() => califica(star)}>{'\u2605'}</a></span>
          ))}

        </div>
      </div>
    </>
  )
}

export default Ray