// llamar a una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;
/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATCH  me permiten editar un elemento
DELETE me permiten eliminar un elemento
*/ 
export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const datos = await respuesta.json();
        return {
            status: respuesta.status,
            nombreUsuario: datos.nombreUsuario 
        }
        
    }catch(error){
       console.log(error); 
       return null;
    }
} 

export const obtenerListaProductos = async()=>{
    try{
        const respuesta = await fetch(URL_producto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error)
    }
}

export const crearProducto = async(producto)=>{
    try{
        const respuesta = await fetch(URL_producto,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
      return respuesta; // el status de la respuesta 201
    }catch(error){
        console.log(error)
    }
}
export const editarProducto = async(producto, id)=>{
    try{
        const respuesta = await fetch(URL_producto+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
      return respuesta; // el status de la respuesta 200
    }catch(error){
        console.log(error)
    }
}
export const borrarProducto = async(id)=>{
    try{
        const respuesta = await fetch(URL_producto+'/'+id,{
            method: "DELETE"
        });
      return respuesta; // el status de la respuesta 200
    }catch(error){
        console.log(error)
    }
}

export const obtenerProducto = async(id)=>{
    try{
        const respuesta = await fetch(URL_producto+'/'+id);
        const producto = await respuesta.json();
        return producto; // voy a retornar un objeto producto.
    }catch(error){
        console.log(error)
    }
}