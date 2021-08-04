import React from 'react'
import { AgregarForm } from './AgregarForm';
import { AgregaProducto} from './AgregarProducto';
import { CrearPDF } from './CrearPDF';

export const Busqueda = ({values, handleInputChange, showSearch, setShowSearch, showAdd, setShowAdd  }) => {

    const {nombre, bodega} = values;

    return (
        <>
            <div className="tabla-botones">
                <AgregaProducto
                    showAdd={showAdd}
                    setShowAdd={setShowAdd}
                />
                <button 
                    onClick={()=>{setShowSearch(!showSearch)}}
                    className="agregar-boton mt-3 mb-3"
                ><i className="fas fa-search "></i></button>

                <CrearPDF/>
            </div>

            {
                showAdd && <AgregarForm/>
            }
            

            {
                showSearch 
                    &&
                    <div className="row">
                        <div className="mb-3 col-3">
                            <label htmlFor="nombre" className="form-label">Busqueda</label>
                            <input 
                                type="text"
                                autoComplete="off"
                                className="form-control" 
                                placeholder="Escriba nombre producto"
                                value={nombre}
                                onChange={handleInputChange}
                                name="nombre"
        
                            />
                        </div>
                        <div className="mb-3 col-3">
                            <label className="form-label">Bodega</label>
                            <select className="form-select" aria-label="Default select example" name="bodega" value={bodega} onChange={handleInputChange}>
                                <option value="" defaultValue>Seleccione una bodega</option>
                                <option value="rio alamo">Rio Alamo</option>
                                <option value="vitaminas">Vitaminas</option>
                            </select>
                        </div>
                    </div>
            }
            
        </>


    )
}
