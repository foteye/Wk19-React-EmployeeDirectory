import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

function EmployeeTable({ employees }) {
  const [employeeRows, setEmployeeRows] = useState([]);

  useEffect(() => {
    renderEmployees();
  }, []);

  const renderEmployees = () => {
    const rowsToRender = employees.map((employee) => {
      return (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.title}</td>
        </tr>
      );
    });

    setEmployeeRows(rowsToRender);
  };

  const sortBy = (property, direction) => {
    const sortEmployeeRows = employees;
    if (!property) {
      return;
    }

    if (!direction) {
      direction = "asc";
    }
    console.log(sortEmployeeRows);

    if (direction === "asc") {
      sortEmployeeRows.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    } else {
      sortEmployeeRows.sort((a, b) => (a[property] < b[property] ? 1 : -1));
    }

    setEmployeeRows(sortEmployeeRows);
    renderEmployees();
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>
            ID
            <Button
              className="btn btn-default button-small"
              onClick={() => sortBy("id")}
            >
              v
            </Button>
          </th>
          <th>
            Name
            <Button
              className="btn btn-default button-small"
              onClick={() => sortBy("name")}
            >
              v
            </Button>
          </th>
          <th>
            Title
            <Button
              className="btn btn-default button-small"
              onClick={() => sortBy("title")}
            >
              v
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </Table>
  );
}

export { EmployeeTable };
