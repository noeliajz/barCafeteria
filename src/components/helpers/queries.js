// llamar a una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;
/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATCH  me permiten editar un elemento
DELETE me permiten eliminar un elemento
*/ 

// Define la URL de la API donde se obtienen los usuarios
const URL_usuarios = 'http://localhost:3004/usuarios'; // Reemplaza con tu URL real

// helpers/queries.js
export const iniciarSesion = async (usuario) => {
    try {
      const response = await fetch('/db.json');
      const data = await response.json();
      
      // Buscar en los usuarios de db.json
      const usuarioEncontrado = data.usuarios.find(user => 
        user.email === usuario.email && user.password === usuario.password
      );
  
      if (usuarioEncontrado) {
        return { status: 200, data: usuarioEncontrado };
      } else {
        return { status: 401 }; // Usuario no autorizado
      }
    } catch (error) {
      console.error('Error en iniciarSesion:', error);
      throw new Error('Error en la conexión con el servidor');
    }
  };
  


        
        
        
        
        
        
   

 
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