import  React from 'react';
import {Table,Card} from 'react-materialize'

const RecordVac = () => {
  return(
    <Card>
      <Table  centered={true} striped={true} className="white">
        <thead>
        <tr>
          <th data-field="id">Fecha </th>
          <th data-field="name">Vacuna</th>
          <th data-field="price">Próxima Vacuna</th>
          <th data-field="price">Nombre y firma</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>01/04/2017</td>
          <td>Poli</td>
          <td>21/04/2019</td>
          <td>Tania Vazquez</td>
        </tr>
        <tr>
          <td>08/04/2018</td>
          <td>Moquillo</td>
          <td>09/04/2018</td>
          <td>Alejandra Galindo</td>
        </tr>
        <tr>
          <td>21/04/2019</td>
          <td>Parvovirus</td>
          <td>12/01/2019</td>
          <td>Mizraim Martínez</td>
        </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default RecordVac;