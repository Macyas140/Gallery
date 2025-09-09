import Ray from "./ray"
import Galeria from "./galeria"
import foto1 from '../assets/pomni.jpg'

function Boton({avisaProm}){
    const k = () => {
        avisaProm();
    }
    const imga=[foto1];
     return (
        <>

    <div className="bot">
        <button className="boton" onClick={k}>
           
            <img src={imga} alt="" className="pomn" />
            
        </button>
    </div>
      
    </>
     )

}

export default Boton