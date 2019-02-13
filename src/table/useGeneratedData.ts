import * as React from "react";
import { TypedDataColumn, DataColumnType } from "./models";
import faker from "faker";

const defaultColumns: TypedDataColumn[] = [
  { name: "firstName", title: "First Name", type: DataColumnType.text },
  { name: "lastName", title: "Last Name", type: DataColumnType.text },
  { name: "address", title: "Address", type: DataColumnType.text },
  { name: "city", title: "City", type: DataColumnType.text },
  { name: "state", title: "State", type: DataColumnType.text },
  { name: "zip", title: "Zip", type: DataColumnType.text },
  { name: "age", title: "Age", type: DataColumnType.number }
];

const defaultRows = (length: number) => {
  const rows: any[] = [];
  for (let index = 0; index < length; index++) {
    const row = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      age: faker.random.number()
    };
    rows.push(row);
  }
  return rows;
};

export default () => {
  const [columns, setColumns] = React.useState<TypedDataColumn[]>(
    defaultColumns
  );
  const [rows, setRows] = React.useState<any[]>(defaultRows(1000));

  return { columns, rows, setColumns, setRows };
};
