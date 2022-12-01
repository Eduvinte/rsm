import React from "react";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Button from 'react-bootstrap/Button';

function BannerInicio() {
  return (
    <div id="contenedor-principal">
      <Container> 
        <Row>
          <Col sm={5} id="title">
            <p>
              Te invitamos a nuestra plataforma, indicadores financieros.
              ¿En que consiste esta página web? Acá tu puedes ver de forma actual
              los valores de la UF (Unidad de fomento) también el valor Actual del Dolar.
            </p>
          </Col>
          <Col sm={2}>
          </Col>
          <Col  sm={5} id="form" className="mt-5">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <h4>Sugestiones</h4>
                <Form.Label>Su correo</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comentários</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" size="lg mt-3">Enviar</Button>{' '}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BannerInicio;
