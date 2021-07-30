import React, { useContext} from 'react'
import productosContext from '../../../context/productos/productosContext';
import { useForm } from '../../../hooks/useForm';

export const AgregarForm = () => {

    const {agregarProducto} = useContext(productosContext);

    const [values, handleInputChange, reset] = useForm({
        nombre: "",
        bodega: "",
        cantidad: ""
    })

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e)=>{
        e.preventDefault();
        agregarProducto(values);
        reset();
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
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="nombre"

                    />
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label">Bodega</label>
                        <select className="form-select" aria-label="Default select example" name="bodega" value={bodega} onChange={handleInputChange}>
                            <option value="" defaultValue>Seleccione una bodega</option>
                            <option value="Rio Alamo">Rio Alamo</option>
                            <option value="Vitaminas">Vitaminas</option>
                        </select>
                </div>
                <div className="mb-1 col-3">
                    <label for="nombre" class="form-label">Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={cantidad}
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="cantidad"
                    />
                </div>
                <div className="col-3">
                    <button 
                        disabled={!nombre || !bodega || !cantidad} 
                        className="btn btn-primary boton-add">Agregar</button>
                </div>

            </div>

            <hr></hr>
        </form>
        
    )
}
