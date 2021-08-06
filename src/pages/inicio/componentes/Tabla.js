import React, { useContext, useEffect, useState } from 'react'
import productosContext from '../../../context/productos/productosContext';
import { ItemTabla } from './ItemTabla';
import {Busqueda} from './Busqueda';
import { useForm } from '../../../hooks/useForm';
import {filtroBodega} from '../../../helpers/filtroBodega';
import {filtroNombre} from '../../../helpers/filtroNombre'
import { Loading } from '../../../shared/Loading';


export const Tabla = () => {
    
    const {obtenerProductos, productos} = useContext(productosContext);

    const [showSearch, setShowSearch] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    
    useEffect(() => {
        obtenerProductos()
    }, [])

    const [values, handleInputChange] = useForm({
        nombre: "",
        bodega: ""
    })

    const {nombre, bodega} = values;

    const [filtroProductos, setFiltroProductos] = useState(productos);

    useEffect(() => {
        let tempBusqueda = filtroBodega(bodega, productos);
        setFiltroProductos(filtroNombre(nombre, tempBusqueda ));
        
    }, [nombre, productos, bodega]);

    return (
        <>

             {
                productos.length <= 0 
                ?
                <Loading/>
                :
                <div className="container animate__animated animate__fadeIn animate__slow">
                    <Busqueda
                        values={values}
                        handleInputChange={handleInputChange}
                        showSearch = {showSearch}
                        setShowSearch = {setShowSearch}
                        showAdd = {showAdd}
                        setShowAdd = {setShowAdd}
                    />

                    <div className={ (showSearch === false && showAdd === false) ? "tabla" : (showSearch === true && showAdd === true ? 'tabla-chica': 'tabla-mediana')}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Bodega</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Movimientos</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filtroProductos.map(producto =>(
                                        <ItemTabla
                                            key={producto._id}
                                            producto={producto}
                                        />    
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            }
 
            
        </>
    )
}
