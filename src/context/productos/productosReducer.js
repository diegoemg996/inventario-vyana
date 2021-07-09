import { types } from "../../types/types";

export const ProductosReducer = (state, action) => {
    switch(action.type) {
        case types.obtenerProductos:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}