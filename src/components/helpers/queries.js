// llamar a una variable de entorno
const URL_usuarioyproducto = import.meta.env.VITE_API_USUARIOYPRODUCTO;



export const iniciarSesion = async (usuario) => {
    try {
      const respuesta = await fetch(`${URL_usuarioyproducto}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      });
  
      // Obtener el texto de la respuesta
      const textoRespuesta = await respuesta.text();
      
      // Comprobar si la respuesta fue exitosa
      if (!respuesta.ok) {
        // Intentar analizar el texto como JSON
        try {
          const errorData = JSON.parse(textoRespuesta);
          throw new Error(errorData.mensaje || 'Error en la respuesta del servidor');
        } catch (parseError) {
          throw new Error('Error en la respuesta del servidor: ' + textoRespuesta);
        }
      }
      
      // Analizar el texto como JSON
      const datos = JSON.parse(textoRespuesta);
      
      return {
        status: respuesta.status,
        nombreCompleto: datos.nombreCompleto || null,
        mensaje: datos.mensaje || 'Respuesta vacía'
      };
    } catch (error) {
      console.error("Error en iniciarSesion:", error);
      return {
        status: 500,
        nombreCompleto: null,
        mensaje: error.message || 'Error en la solicitud'
      };
    }
  };
  
  
 
export const obtenerListaProductos = async()=>{
    try{
        const respuesta = await fetch(`${URL_usuarioyproducto}/productos`);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error)
    }
}

export const crearProducto = async (producto) => {
  try {
      const respuesta = await fetch(`${URL_usuarioyproducto}/productos`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(producto)
      });

      // Leer el cuerpo de la respuesta para obtener más detalles sobre el error
      const respuestaTexto = await respuesta.text();

      // Verificar si la respuesta fue exitosa (código de estado 200-299)
      if (!respuesta.ok) {
          throw new Error(`Error en la solicitud: ${respuesta.status}. Detalles: ${respuestaTexto}`);
      }

      // Retornar la respuesta en formato JSON
      const datos = JSON.parse(respuestaTexto); // Cambiar a JSON.parse si la respuesta es un JSON
      return datos;

  } catch (error) {
      // Manejo de errores
      console.error("Error al crear el producto:", error);
      // Puedes retornar un valor específico para indicar el error
      return { error: error.message };
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