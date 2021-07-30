import React from 'react'
import moment from 'moment';
import 'moment/locale/es';

export const Movimiento = ({movimiento}) => {

    moment.locale('es');

    return (
        <tr>
            <td>
            {`Se 
                ${movimiento.cantidad === 1 ? `ha` : `han` }
                ${movimiento.tipo === "entrada" ? "agregado" : "retirado"}
                ${movimiento.cantidad >= 0 ? movimiento.cantidad : movimiento.cantidad*-1 } 
                ${movimiento.cantidad === 1 ? `kg` : `kgs` } de 
                ${movimiento.producto.nombre} el dia
                ${moment(movimiento.fecha).format('LLL')}`
            }
            {
                movimiento.tipo === "entrada" 
                ? 
                <span> <i className="fas fa-arrow-alt-circle-up registro-entrada"></i> </span> 
                : 
                <span> <i className="fas fa-arrow-alt-circle-down registro-salida"></i> </span>
            }
            </td>
        </tr>
    )
}
