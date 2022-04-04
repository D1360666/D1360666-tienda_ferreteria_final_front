import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import GrillaArticulos from '../components/GrillaArticulos'

export default function ArticulosPage() {
  return (
    <div>
      <div>ArticulosPage</div>
      <p>
      <label htmlFor='descripcion'>
        <input type='text' id='descripcion' placeholder='Descripción del artículo' />
      </label>      
      </p>
      <p>
      <label htmlFor='precio_base'>
        <input type='text' id='precio_base' placeholder='Ingrese precio' />
      </label>
      </p>
      <p>
      <label htmlFor='stock_minimo'>
        <input type='text' id='stock_minimo' placeholder='Stock mínimo' />
      </label>
      </p>
      <p>
      <label htmlFor='stock_maximo'>
        <input type='text' id='stock_maximo' placeholder='Stock máximo' />
      </label>
      </p>
      <ButtonGroup aria-label="Basic example">
        <Button variant="success">Add</Button>
        <Button variant="success">Update</Button>
        <Button variant="success">Delete</Button>
      </ButtonGroup>
      
      
      <GrillaArticulos />
    </div>
    
  )
}
