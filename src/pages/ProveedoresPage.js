import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import GrillaProveedores from '../components/GrillaProveedores'

export default function ProveedoresPage() {
  return (
    
      <div>
        <div>Proveedores Page</div>
        <p>
          <label htmlFor='nombre'>
            <input type='text' id='nombre' placeholder='Nombre proveedor' />
          </label>      
        </p>
        <p>
          <label htmlFor='nro_proveedor'>
            <input type='text' id='nro_proveedor' placeholder='Nro proveedor' />
          </label>
        </p>
        <p>
          <label htmlFor='direccion'>
            <input type='text' id='direccion' placeholder='Dirección' />
          </label>
        </p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Add</Button>
          <Button variant="success">Update</Button>
          <Button variant="success">Delete</Button>
        </ButtonGroup>

        <GrillaProveedores />
    </div>
  )
}
