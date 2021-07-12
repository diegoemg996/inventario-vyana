import React, { useState } from 'react'

export const Busqueda = ({values, handleInputChange}) => {

    const {nombre, bodega} = values;

    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
            <button 
                onClick={()=>{setShowSearch(!showSearch)}}
                className="agregar-boton mt-3 mb-3"
            ><i class="fas fa-search"></i></button>

            {
                showSearch 
                    &&
                    <div className="row">
                    <div className="mb-3 col-3">
                        <label for="nombre" class="form-label">Busqueda</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Escriba nombre producto"
                            value={nombre}
                            onChange={handleInputChange}
                            name="nombre"
    
                        />
                    </div>
                    <div className="mb-3 col-3">
                        <label class="form-label">Bodega</label>
                        <select class="form-select" aria-label="Default select example" name="bodega" value={bodega} onChange={handleInputChange}>
                            <option selected>Seleccione una bodega</option>
                            <option value="rio alamo">Rio Alamo</option>
                            <option value="vitaminas">Vitaminas</option>
                        </select>
                    </div>
                </div>
            }
            
        </>


    )
}
