import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, obtenerListaProductos } from "../../helpers/queries";
import Swal from "sweetalert2";


const ItemProducto = ({producto,setProductos}) => {

  const borrar = () => {
    Swal.fire({
      title: 'Esta seguro de borrar el siguiente producto?',
      text: "El siguiente cambio no podra ser revertido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero borrar!',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        borrarProducto(producto._id).then((respuesta)=>{
          if(respuesta.status === 200){
            // eliminarProducto();
            //pedir la lista de productos a mi backend
            obtenerListaProductos().then((respuesta)=>{
              if(respuesta){
                setProductos(respuesta);
              } else {
                Swal.fire("Error", "Intente realizar esta operacion en unos minutos", "error");
              }
            })
            Swal.fire(
              'Borrado!',
              'El producto fue borrado.',
              'success'
            )
          }else{
            Swal.fire({
              title: "Lo siento!",
              text: "El producto no pudo ser eliminado.",
              icon: "error",
              confirmButtonColor: "#fa8072",
            });
          }
        })
      }
    })
}

   return (
    <tr>
      {/* <td>{props.producto.id}</td> */}
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={'/administrador/editar-producto/'+producto._id}>Editar</Link>
        <Button variant="danger" onClick={borrar}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
