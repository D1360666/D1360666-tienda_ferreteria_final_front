import React from 'react'
import { Table } from 'react-bootstrap'

export default function ListaFactura() {
  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Artículo</th>
                <th>Cantidad</th>
                <th>P. Unitario</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </Table>

    </div>
  )
}
