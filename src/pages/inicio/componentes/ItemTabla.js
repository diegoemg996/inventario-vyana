import React from 'react'

export const ItemTabla = ({producto}) => {
    console.log(producto)
    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.bodega}</td>
            <td>{producto.cantidad}</td>
        </tr>
    )
}
