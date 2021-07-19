/* import React, { useContext, useState } from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import productosContext from '../../context/productos/productosContext';
import {agregarComas} from '../../helpers/agregarComas';


const crearPDF = ()=>{

    const{productos} = useContext(productosContext);
    const [pdfProductos, setPdfProductos] = useState([...productos])

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
    doc.save('table.pdf')

}  */