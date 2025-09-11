import React from 'react'

export default function Modal({ modal, setModal }) {
    if (modal) {
        return (
            <div className='modal-overlay' onClick={()=>setModal(false)}>

            </div>
        )
    }else{
        return false;
    }


}
