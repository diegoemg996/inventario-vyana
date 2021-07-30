import React,{ useContext, useEffect } from 'react'
import productosContext from '../../context/productos/productosContext'
import { Tabla } from './components/Tabla'

export const Movimientos = () => {

    const {obtenerMovimientos, movimientos} =  useContext(productosContext)

    useEffect(() => {
        obtenerMovimientos()
    }, [])

    return (
        <div className="page-container">
            <Tabla movimientos={movimientos}/>
        </div>
    )
}
