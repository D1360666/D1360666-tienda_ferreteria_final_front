import React from 'react'
import {  ListGroup, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (


    <nav>
        <ListGroup horizontal>
                <ListGroup.Item variant="dark"><NavLink exact to="/" activeClassName="active">Home</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/proveedores" activeClassName="active">Proveedores</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/articulos" activeClassName="active">Articulos</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/clientes" activeClassName="active">Clientes</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/facturacion" activeClassName="active">Facturacion</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/compras" activeClassName="active">Compras</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/Usuarios" activeClassName="active">Usuarios</NavLink></ListGroup.Item>
                <ListGroup.Item variant="dark"><NavLink exact to="/register" activeClassName="active">Registro</NavLink></ListGroup.Item>        
        </ListGroup>
    </nav>
  )
}
