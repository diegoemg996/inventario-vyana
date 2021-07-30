
export const filtroNombre = ( nombre, productos ) => {
    if(nombre === ""){
        return productos
    }
    nombre = nombre.toLocaleLowerCase();
    return productos.filter( producto => producto.nombre.toLocaleLowerCase().includes( nombre ));
}