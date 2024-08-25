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

export const iniciarSesion = async (usuario) => {
    try {
        // Realiza la petición a la API
        const respuesta = await fetch(URL_usuario);
        
        // Verifica si la respuesta fue exitosa
        if (!respuesta.ok) {
            throw new Error('Error en la respuesta de la API');
        }

        // Convierte la respuesta a JSON
        const listaUsuarios = await respuesta.json();
        
        // Busca el usuario en la lista de usuarios
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => {
            return itemUsuario.email === usuario.email;
        });
        
        // Verifica si el usuario fue encontrado
        if (usuarioBuscado) {
            // Verifica la contraseña del usuario
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado; // Devuelve el usuario si la contraseña es correcta
            } else {
                console.log('Error: Contraseña incorrecta');
                return null; // Devuelve null si la contraseña es incorrecta
            }
        } else {
            console.log('Error: El email no existe');
            return null; // Devuelve null si el email no existe
        }
    } catch (error) {
        // Registra cualquier error que ocurra durante el proceso
        console.error('Error al iniciar sesión:', error);
        return null; // Devuelve null en caso de error
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