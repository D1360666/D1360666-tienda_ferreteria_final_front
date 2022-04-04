import React from 'react'

export default function ComprasPage() {
  return (
    <div>
    <div><h3>Datos compra</h3></div>
    <label>Nro: factura</label>
    <label htmlFor='fecha'>
        <input type='date' id='fecha' />
    </label>
    <label htmlFor='nombreProveedor'>Proveedor
        <input type='text' id='nombreProveedor' />
    </label>
    <br /><br />
    <ListaFactura />

    <label>Total</label><br /><br />

    <ButtonGroup aria-label="Basic example">
      <Button variant="success">Add</Button>
      <Button variant="success">Update</Button>
      <Button variant="success">Delete</Button>
    </ButtonGroup>
  </div>
  )
}
