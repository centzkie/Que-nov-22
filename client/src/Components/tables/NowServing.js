import Table from "react-bootstrap/Table";

const center = {
  textAlign: "center",
};

export function NowServing() {
  return (
    <Table striped bordered style={center}>
      <thead>
        <tr>
          <th style={{ backgroundColor: "#800000", color: "white" }}>
            Queue Line Number
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11</td>
        </tr>
        <tr>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  );
}
