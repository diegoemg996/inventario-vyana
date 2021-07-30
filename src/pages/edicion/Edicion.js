import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import productosContext from '../../context/productos/productosContext'
import { useForm } from '../../hooks/useForm';

export const Edicion = () => {


    const{productoActivo, editarProducto, productos, obtenerProductoActivo, obtenerProductos} = useContext(productosContext);

    const history = useHistory();

    const [activeName, setActiveName] = useState(productoActivo.nombre);

    const [values, handleInputChange] = useForm({
        nombre: '' ,
        bodega: '' ,
        cantidad: '',
        productoSelect: ''

    })
    const {nombre, bodega, cantidad, productoSelect} = values;

    useEffect(() => {
        obtenerProductos();
    }, [])

    useEffect(() => {
        obtenerProductos();
        if(Object.keys(productoActivo).length > 0 && productoSelect.length === 0){
            setActiveName(productoActivo.nombre)
        }else{
            handleSelected();
        }
    }, [productoSelect])

    const handleSubmit = (e)=>{
        e.preventDefault();
        editarProducto(values, productoActivo._id);
        history.push('/');
    }

    const handleSelected = ()=>{
        let seleccionado = productos.filter(producto =>(
            producto._id === productoSelect
        ))
        if(seleccionado.length === 0){
            setActiveName("No hay producto seleccionado")
        }else{
            obtenerProductoActivo(seleccionado[0]);
            setActiveName(seleccionado[0].nombre);
        }
    }

    return (
        <div className="page-container">
           <form className="edit-form" onSubmit={handleSubmit}>
            <div className="mb-3 col-3">
                <label className="form-label">Producto a editar</label>
                    <select className="form-select" 
                            aria-label="Default select example" 
                            name="productoSelect" 
                            value={productoSelect} 
                            onChange={handleInputChange}
                            >
                        <option value="" defaultValue>Seleccione un producto</option>
                        {
                            productos.map(producto => (
                                <option
                                    value={producto._id}
                                    key={producto._id}
                                >{producto.nombre}</option>
                            ))
                        }
                        
                </select>
            </div>

            <h2>Editar: {activeName }</h2>
                <div className="mb-2">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
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
                    <label className="form-label">Bodega</label>
                        <select className="form-select" aria-label="Default select example" name="bodega" value={bodega} onChange={handleInputChange}>
                            <option value="" defaultValue>Seleccione una bodega</option>
                            <option value="Rio Alamo">Rio Alamo</option>
                            <option value="Vitaminas">Vitaminas</option>
                        </select>
                </div>

                <div className="mb-2">
                    <label htmlFor="cantidad" className="form-label">Cantidad</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={cantidad}
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="cantidad"
                    />
                </div>

                <button type="submit" 
                        disabled={!nombre || !bodega || !cantidad} 
                        className="btn btn-primary"
                >Modificar</button>
                
           </form>
        </div>
    )
}
