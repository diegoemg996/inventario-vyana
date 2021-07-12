import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import productosContext from '../../../context/productos/productosContext';
import { agregarComas } from '../../../helpers/agregarComas'
import { useForm } from '../../../hooks/useForm';

export const ItemTabla = ({producto}) => {

    const [values, handleInputChange, reset] = useForm({
        movimiento: 0
    });

    const {movimiento} = values;

    const{movimientoProductos, borrarProducto} = useContext(productosContext);

    const handleSuma = ()=>{
        movimientoProductos(producto._id, movimiento);
        Swal.fire(
            'Movimiento exitoso',
            `Se han agregado ${movimiento} kgs a ${producto.nombre}`,
            'success'
        )
        reset();
    }

    const handleResta = ()=>{
        movimientoProductos(producto._id, -movimiento);
        Swal.fire(
            'Movimiento exitoso',
            `Se han disminuido ${movimiento} kgs a ${producto.nombre}`,
            'success'
        )
        reset();
    }

    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.bodega}</td>
            <td>{agregarComas(producto.cantidad)}</td>
            <td>
                <div className="table-col">
                    <input
                        name="movimiento"
                        onChange={handleInputChange}
                        value={movimiento}
                        className="form-control form-control-sm input-table">
                    </input>
                    <button className="btn btn-primary" onClick={handleSuma}>
                        <i className="fas fa-plus"></i>
                    </button>
                    <button className="btn btn-danger" onClick={handleResta}>
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </td>
            <td>
                <button className="btn btn-success"><i className="fas fa-edit"></i></button>
            </td>
            <td>
                <button className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    )
}