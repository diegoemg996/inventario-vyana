import React, { useReducer } from 'react';
import { ProductosReducer } from './productosReducer';
import ProductosContext from './productosContext';
import { types } from '../../types/types';
import apiDB from '../../api/apiDB';


const ProductosState = props => {
    const initialState = {
        productos: [],
        movimientos:[],
        productoActivo: {}
    }

    const tokenUsuario = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDhhMDllZjk4NjkwMTAwMTU4YjgwM2YiLCJpYXQiOjE2MjYxODg3MDUsImV4cCI6MTY1NzcyNDcwNX0.UqhVaAVkVEtK0A2bI3bzMIyJ2jnrVVYwCFMW0by46hg';

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

    const agregarProducto = async(valores)=>{

        try {
            await apiDB.post(`/productos`,valores, {
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            
            obtenerProductos()
        } catch (error) {
           dispatch({
                type: types.erroresAgregar,
                payload: error.response.data.errors
            }) 
        }

    }

    const editarProducto = async(valores, id)=>{

        try {
            await apiDB.put(`/productos/${id}`,valores, {
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            obtenerProductos()
        } catch (error) {
            console.log(error.response);
        }

    }

    const movimientoProductos = async( id, cantidad)=>{

        const numeroCantidad = parseFloat(cantidad);

        try {
            await apiDB.post(`/movimientos/agregar/${id}`,{cantidad:numeroCantidad}, {
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            obtenerProductos()
        } catch (error) {
            console.log(error.response);
        }
    }

    const borrarProducto = async(id)=>{
        try {
            const productoBorrado = await apiDB.delete(`/productos/${id}`,{
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            obtenerProductos()
        } catch (error) {
            console.log(error.response);
        }
    }

    const obtenerMovimientos = async()=>{
        try {
            const movimientos = await apiDB.get('/movimientos');
            dispatch({
                type: types.obtenerMovimientos,
                payload: movimientos.data.movimientos
            })             
        } catch (error) {
            console.log(error.response)
        }
    }

    const obtenerProductoActivo = (producto)=>{
        console.log('activo', producto)
        dispatch({
            type: types.obtenerProductoActivo,
            payload: producto
        })
    }


    return (
        <ProductosContext.Provider
            value={{
                productos: state.productos,
                movimientos: state.movimientos,
                productoActivo: state.productoActivo,
                obtenerProductos,
                agregarProducto,
                movimientoProductos,
                borrarProducto,
                obtenerMovimientos,
                obtenerProductoActivo,
                editarProducto  

            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;