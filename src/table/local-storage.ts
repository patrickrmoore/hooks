import * as React from "react";

const serializeValue = (value: any) => {
  if (typeof value !== "string" && typeof value !== "number") {
    value = JSON.stringify(value);
  }
  return value;
};

const deserializeValue = (value: any) => {
  try {
    value = JSON.parse(value);
  } catch {}
  return value;
};

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<T>] {
  const [item, setValue] = React.useState(() => {
    let value = localStorage.getItem(key) || initialValue;
    localStorage.setItem(key, serializeValue(value));
    return deserializeValue(value);
  });

  const setItem = (newValue: T) => {
    setValue(newValue);
    window.localStorage.setItem(key, serializeValue(newValue));
  };

  return [item, setItem];
}
