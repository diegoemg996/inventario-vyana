import React from 'react'

export const AgregaProducto = ({showAdd, setShowAdd}) => {

    return (
        <>
            <div>
                <button
                    onClick={()=>{setShowAdd(!showAdd)}}
                    className="agregar-boton mt-3 mb-1">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
    
        </>
    )

}
