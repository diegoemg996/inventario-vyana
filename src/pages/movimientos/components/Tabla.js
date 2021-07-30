import React from 'react'
import { Movimiento } from './Movimiento'

export const Tabla = ({movimientos}) => {
    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">
                        <h2>Movimientos</h2>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movimientos.map(movimiento => (
                            <Movimiento
                                movimiento={movimiento}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
