import React from 'react'

export const AgregaProducto = ({showAdd, setShowAdd}) => {

    return (
        <>
            <div>
                <button
                    onClick={()=>{setShowAdd(!showAdd)}}
                    className="btn btn-primary agregar-boton mt-3 mb-1">
                    <i className="fas fa-plus fa-2x"></i>
                </button>
            </div>
    
        </>
    )

}
