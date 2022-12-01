import React from 'react'
import Dolar from "./Dolar";
import Uf from "./Uf";
import Fecha from "./Fecha";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styleSheet/ShoData.css';

function ShowData() {
  return (
    <CardGroup id="card">
    <Card>
      <Card.Body>
        <Card.Title id="datas"><Dolar /></Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Cotación del Dolar</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title id="datas"><Uf /></Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Valor UF</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title id="datas"><Fecha /></Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Fecha actual</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  )
}

export default ShowData