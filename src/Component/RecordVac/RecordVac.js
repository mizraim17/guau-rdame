import  React from 'react';
import {Table} from 'react-materialize'

const RecordVac = () => {
  return(
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
        <td>Alvinzzzzz</td>
        <td>Eclair</td>
        <td>$0.87</td>
        <td>$0.87</td>
      </tr>
      <tr>
        <td>Alan</td>
        <td>Jellybean</td>
        <td>$3.76</td>
        <td>$3.76</td>
      </tr>
      <tr>
        <td>Jonathan</td>
        <td>Lollipop</td>
        <td>$7.00</td>
        <td>$7.00</td>
      </tr>
      </tbody>
    </Table>
  );
}

export default RecordVac;