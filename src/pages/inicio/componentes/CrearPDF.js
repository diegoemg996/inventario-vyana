import React, { useContext, useState } from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import productosContext from '../../../context/productos/productosContext';
import {agregarComas} from '../../../helpers/agregarComas';


export const CrearPDF = () => {

    const{productos} = useContext(productosContext);
    const [pdfProductos, setPdfProductos] = useState(productos);

    const PDFCreator = ()=>{
        const ordenadoPDF = productos.map(item =>{
            let nuevoOrden = [item.nombre, item.bodega, agregarComas(item.cantidad) ]
            return nuevoOrden;		
        })
    
        setPdfProductos(ordenadoPDF)
        
        const doc = new jsPDF({
            orientation: "landscape"
          })
    
        doc.autoTable({ html: '#my-table' })
        doc.autoTable({
        head: [['Producto', 'Bodega', 'Cantidad']],
        body: ordenadoPDF,
        })
        const date = new Date();
        doc.save(`Inventario-${date}.pdf`)
    
    } 

    return (
        <div>
                <button
                    onClick={PDFCreator}
                    className="btn btn-primary agregar-boton mt-3 mb-1">
                    <i className="fas fa-print fa-2x"></i>
                </button>
            </div>
    )
}
