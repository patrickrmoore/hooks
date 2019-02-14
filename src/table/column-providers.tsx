import * as React from "react";
import {
  IntegratedSorting as DIntegratedSorting,
  Sorting,
  DataTypeProvider,
  DataTypeProviderProps
} from "@devexpress/dx-react-grid";
import { TableContainer } from "./table-context";
import { TypedDataColumn, DataColumnType } from "./models";
import moment from "moment";
import NumberFormat from "react-number-format";

const NumberFormatter = ({ value }: DataTypeProvider.ValueFormatterProps) => {
  if (value !== undefined && value !== null && typeof value === "number") {
    return (
      <span
        style={{
          float: "right"
        }}
      >
        <NumberFormat
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
          value={value}
        />
      </span>
    );
  }

  return null;
};

export const NumberFormatProvider = () => {
  const { columns } = React.useContext(TableContainer.Context);

  return React.useMemo(
    () => (
      <DataTypeProvider
        formatterComponent={NumberFormatter}
        for={columns
          .filter(column => column.type === DataColumnType.number)
          .map(column => column.name)}
      />
    ),
    [columns]
  );
};

const DateFormatter = ({ value }: DataTypeProvider.ValueFormatterProps) => {
  if (value) {
    const dateValue = moment(value);

    if (dateValue.isValid()) {
      return (
        <div>
          <div>{moment(value).format("L")}</div>
          <div>{moment(value).format("LT")}</div>
        </div>
      );
    }
  }

  return null;
};

export const DateFormatProvider = () => {
  const { columns } = React.useContext(TableContainer.Context);

  return React.useMemo(
    () => (
      <DataTypeProvider
        formatterComponent={DateFormatter}
        for={columns
          .filter(column => column.type === DataColumnType.date)
          .map(column => column.name)}
      />
    ),
    [columns]
  );
};

const BooleanFormatter = ({ value }: DataTypeProvider.ValueFormatterProps) => {
  const checked = value === true ? true : false;
  return <input type="checkbox" checked={checked} readOnly />;
};

export const BooleanFormatProvider = () => {
  const { columns } = React.useContext(TableContainer.Context);

  return React.useMemo(
    () => (
      <DataTypeProvider
        formatterComponent={BooleanFormatter}
        for={columns
          .filter(column => column.type === DataColumnType.boolean)
          .map(column => column.name)}
      />
    ),
    [columns]
  );
};
