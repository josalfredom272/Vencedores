import Table from 'react-bootstrap/Table';
export default function App() {

    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          <th># Servicio</th>
          <th>Fecha</th>
          <th>Ciudad de Entrega</th>
          <th>Dirección de Entrega</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Bueno</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Malo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    );
}