import foto1 from '../assets/pomni.jpg'
function Titulo() {
    const imga=[foto1];

    return (
        <>
            <div className="titulo">
                <div className="pomni">
                {imga.map((img,i)=>(
                    <img key={i} src={img} alt="imago" className="imagene" />
                ))}
                </div>
                <h1>Pomni tiene los colores de Jesus</h1>
                
            </div>
            
        </>
    )
}

export default Titulo
