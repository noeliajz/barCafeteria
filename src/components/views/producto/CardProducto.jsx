import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card >
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Card.Text>Categoria: {producto.categoria}</Card.Text>
          <Card.Text>Descripción: {producto.desc}</Card.Text>
          <Link className="btn btn-primary" to={ '/detalle/' + producto._id}>
            Ver detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
