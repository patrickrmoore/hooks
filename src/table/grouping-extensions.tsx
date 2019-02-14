import * as React from "react";
import { IntegratedGrouping as DIntegratedGrouping } from "@devexpress/dx-react-grid";
import { TableContainer } from "./table-context";
import { TypedDataColumn, DataColumnType } from "./models";
import NumberFormat from "react-number-format";
import moment from "moment";

export const IntegratedGrouping = () => {
  const { columns } = React.useContext(TableContainer.Context);

  return React.useMemo(() => {
    console.log("grouping extensions");
    const extensions = generateGroupingExtensions(columns);
    return <DIntegratedGrouping columnExtensions={extensions} />;
  }, [columns]);
};

export function generateGroupingExtensions(
  columns: TypedDataColumn[]
): DIntegratedGrouping.ColumnExtension[] {
  return columns.map(
    column =>
      ({
        columnName: column.name,
        criteria: getGrouper(column)
      } as DIntegratedGrouping.ColumnExtension)
  );
}

function getGrouper(column: TypedDataColumn) {
  if (column.type === DataColumnType.number) {
    return groupNumber;
  }

  if (column.type === DataColumnType.date) {
    return groupDate;
  }

  if (column.type === DataColumnType.boolean) {
    return groupBoolean;
  }
  return groupString;
}

function groupBoolean(value = false) {
  if (value) {
    return { key: "true", value: true };
  }
  return { key: "false", value: false };
}

function groupDate(value?: Date) {
  if (value) {
    const dateValue = moment(value);
    if (dateValue.isValid()) {
      return {
        key: `${dateValue.format("L")} - ${dateValue.format("LT")}`,
        value
      };
    }
  }
  return { key: "" };
}

function groupNumber(value?: number) {
  if (value !== undefined || value !== null) {
    return {
      key: value,
      value
    };
  }
  return { key: "" };
}

function groupString(value = "") {
  return { key: value };
}
