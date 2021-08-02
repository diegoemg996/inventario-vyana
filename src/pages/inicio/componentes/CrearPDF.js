import React, { useContext } from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import productosContext from '../../../context/productos/productosContext';
import {agregarComas} from '../../../helpers/agregarComas';
import moment from 'moment';
import 'moment/locale/es';


export const CrearPDF = () => {

    moment.locale('es');

    const{productos} = useContext(productosContext);

    const PDFCreator = ()=>{
        const date = new Date();
        const ordenadoPDF = productos.map(item =>{
            let nuevoOrden = [item.nombre, item.bodega, agregarComas(item.cantidad) ]
            return nuevoOrden;		
        })
            
        const doc = new jsPDF({
            orientation: "landscape"
          })
        doc.text(`Fecha: ${moment(date).format('D MMM YY')}`, 15, 20)
        doc.autoTable({ html: '#my-table' })
        doc.autoTable({
        head: [['Producto', 'Bodega', 'Cantidad']],
        body: ordenadoPDF,
        })
        
        doc.save(`Inventario-${moment(date).format('D MMM YY')}.pdf`)
    
    } 

    return (
        <div>
                <button
                    onClick={PDFCreator}
                    className="agregar-boton mt-3 mb-1">
                    <i className="fas fa-print"></i>
                </button>
            </div>
    )
}
