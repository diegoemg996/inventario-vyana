import React, { useReducer } from 'react';
import { ProductosReducer } from './productosReducer';
import ProductosContext from './productosContext';
import { types } from '../../types/types';
import apiDB from '../../api/apiDB';


const ProductosState = props => {
    const initialState = {
        productos: []
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(ProductosReducer, initialState);

    const obtenerProductos = async()=>{
        
        try {
            const productos = await apiDB.get('/productos')
            dispatch({
                type: types.obtenerProductos,
                payload: productos.data.productos
            })
        } catch (error) {
            dispatch({
                type: types.obtenerProductos,
                payload: []
            })
        }
    }

    return (
        <ProductosContext.Provider
            value={{
                productos: state.productos,
                obtenerProductos
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;