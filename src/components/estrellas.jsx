
import Ray from './ray'
import { useState } from 'react'

function Estrella({avisaCambio, index}) {

   const stars=[1,2,3,4,5]
  const [raeting, setRaiting]=useState(0)
  const califica = (star) =>{
        setRaiting(star);
        avisaCambio(index,star);
      }

    return (
        <>

            {stars.map((star,i)=>(
                    <span className={star <= raeting ? "active" : "inactive"} key={i}><a onClick={() => califica(star)}>{'\u2605'}</a></span>
                ))}


        </>
    )
}

export default Estrella
