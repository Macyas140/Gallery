import foto1 from '../assets/chris.jpg'
import foto2 from '../assets/stewie.jpg'
import foto3 from '../assets/pop.jpg'
import foto4 from '../assets/lol.jpg'
import Ray from "./ray"
import Estrella from './Estrellas'
import Boton from './boton'
import { useState } from 'react'

function Galeria() {
    const [imagenes, setImages] = useState([
        {id:1, src:foto1, rate:0},
        {id:2, src:foto2, rate:0},
        {id:3, src:foto3, rate:0},
        {id:4, src:foto4, rate:0},
        ]);

    const ordenaImagenes = (index, rate) =>{
        const imagenesOrd = [...imagenes];
        imagenesOrd[index].rate = rate;
        imagenesOrd.sort((a,b)=>b.rate-a.rate);
        setImages(imagenesOrd);

    }
    const promedio = () => {
        const prom = [...imagenes];
        const promedio = prom.reduce((total, lol)=>total + lol.rate, 0)
        const prome = promedio/prom.length;
        console.log(prome);
    }
    

    return (
        <>
        <div>
            <div className="galeria">
                {imagenes.map((img,i)=>(
                    <div className="kard" key={img.id}>
                    <img src={img.src} alt="imagen" className="imagenes" />
                    <Ray avisaCambio={ordenaImagenes} index={i}/>
                    
                    </div>
                ))}
                  
            </div>
            
            <Boton avisaProm={promedio}/>
         </div>
           
        </>
    )
}

export default Galeria