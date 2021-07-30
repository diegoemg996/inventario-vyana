import { types } from "../../types/types";

export const ProductosReducer = (state, action) => {
    switch(action.type) {
        case types.obtenerProductos:
            return {
                ...state,
                productos: action.payload
            }
        case types.obtenerMovimientos:
            return{
                ...state,
                movimientos: action.payload
            }
        case types.erroresAgregar:
            return{
                ...state,
                erroresAgregar: action.payload
            }
        case types.obtenerProductoActivo:{
            return{
                ...state,
                productoActivo: action.payload
            }
        }
        default:
            return state;
    }
}