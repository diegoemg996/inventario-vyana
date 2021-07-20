import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import productosContext from '../../context/productos/productosContext'
import { useForm } from '../../hooks/useForm';

export const Edicion = () => {

    const{productoActivo, editarProducto} = useContext(productosContext);

    const history = useHistory();

    const [values, handleInputChange] = useForm({
        nombre: productoActivo.nombre,
        bodega: productoActivo.bodega,
        cantidad: productoActivo.cantidad
    })

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e)=>{
        e.preventDefault();
        editarProducto(values, productoActivo._id);
        history.push('/');
    }

    return (
        <div className="page-container">


           <form className="edit-form" onSubmit={handleSubmit}>
            <h2>{productoActivo.nombre}</h2>
                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={nombre}
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="nombre"
                    />
                </div>

                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label">Bodega</label>
                    <input 
                        type="text" 
                        className="form-control"
                        autoComplete="off" 
                        value={bodega}
                        onChange={handleInputChange}
                        name="bodega"
                    />
                </div>

                <div className="mb-2">
                    <label for="exampleInputEmail1" className="form-label">Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={cantidad}
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="cantidad"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Modificar</button>
                
           </form>
        </div>
    )
}
