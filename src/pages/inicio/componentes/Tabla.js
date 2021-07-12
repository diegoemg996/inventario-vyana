import React, { useContext, useEffect, useState } from 'react'
import productosContext from '../../../context/productos/productosContext';
import { ItemTabla } from './ItemTabla';
import {Busqueda} from './Busqueda';
import { useForm } from '../../../hooks/useForm';
import {filtroBodega} from '../../../helpers/filtroBodega';
import {filtroNombre} from '../../../helpers/filtroNombre'

export const Tabla = () => {
    
    const {productos} = useContext(productosContext);

    const [values, handleInputChange] = useForm({
        nombre: "",
        bodega: ""
    })

    const {nombre, bodega} = values;

    const [filtroProductos, setFiltroProductos] = useState(productos);

    useEffect(() => {
        let tempBusqueda = filtroBodega(bodega, productos);
        setFiltroProductos(filtroNombre(nombre, tempBusqueda ))
        
    }, [nombre, productos, bodega]);

    return (
        <div className="container">
            <Busqueda
                values={values}
                handleInputChange={handleInputChange}
            />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Bodega</th>
                        <th scope="col">Cantidad</th>
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
    )
}
