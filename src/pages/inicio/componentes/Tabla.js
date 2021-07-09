import React, { useContext } from 'react'
import productosContext from '../../../context/productos/productosContext';
import { ItemTabla } from './ItemTabla'

export const Tabla = () => {
    const {productos} = useContext(productosContext);

    return (
        <div>
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
                        productos.map(producto =>(
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
