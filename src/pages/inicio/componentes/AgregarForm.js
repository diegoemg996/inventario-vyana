import React, { useContext } from 'react'
import productosContext from '../../../context/productos/productosContext';
import { useForm } from '../../../hooks/useForm';

export const AgregarForm = () => {

    const {agregarProducto} = useContext(productosContext);

    const [values, handleInputChange] = useForm({
        nombre: "",
        bodega: "",
        cantidad: ""
    })

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e)=>{
        e.preventDefault();
        agregarProducto(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row add-form">
                <div className="mb-1 col-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={nombre}
                        onChange={handleInputChange}
                        name="nombre"

                    />
                </div>
                <div className="mb-1 col-3">
                    <label for="nombre" class="form-label">Bodega</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={bodega}
                        onChange={handleInputChange}
                        name="bodega"
                    />
                </div>
                <div className="mb-1 col-3">
                    <label for="nombre" class="form-label">Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={cantidad}
                        onChange={handleInputChange}
                        name="cantidad"
                    />
                </div>
                <div className="col-3">
                    <button className="btn btn-primary boton-add">Agregar</button>
                </div>

            </div>

            <hr></hr>
        </form>
        
    )
}
