import foto1 from '../assets/pomni.jpg'
function Envia({ onClick, children }) {

    const imga = [foto1];
    return (
        <>

            <div className="bot">
                <button className="boton" onClick={() => onClick()}>
                    {children}
                    <img src={imga} alt="" className="pomn" />


                </button>
            </div>

        </>
    )

}

export default Envia