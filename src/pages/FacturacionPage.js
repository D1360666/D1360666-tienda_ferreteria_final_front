import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

import ListaFactura from '../components/ListaFactura'


export default function FacturacionPage() {
  return (
    
    <div>
      <div><h3>DatosFactura</h3></div>
      <label>Nro: factura</label>
      <label htmlFor='fecha'>
          <input type='date' id='fecha' />
      </label>
      <label htmlFor='nombreCliente'>Clientes
          <input type='text' id='nombreCliente' />
      </label>
      <br /><br />
      <ListaFactura />

      <label>Total</label>

      <ButtonGroup aria-label="Basic example">
        <Button variant="success">Add</Button>
        <Button variant="success">Update</Button>
        <Button variant="success">Delete</Button>
      </ButtonGroup>
    </div>
      
    
  )
}
