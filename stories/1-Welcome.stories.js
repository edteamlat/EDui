import React from "react";
import { Table } from "../src/index";

export default {
  title: "Table"
};

export const PrimaryTable = () => (
  <Table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
  </Table>
);

export const SecondaryTable = () => (
  <Table type="secondary">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
  </Table>
);

export const TertiaryTable = () => (
  <Table type="tertiary">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
  </Table>
);

export const AccentTable = () => (
  <Table type="accent">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
  </Table>
);

export const DarkTable = () => (
  <Table type="dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Alejandro</td>
      <td>alejogs4@gmail.com</td>
      <td>Aqui las acciones</td>
    </tr>
  </Table>
);

PrimaryTable.story = {
  name: "PrimaryTable"
};
