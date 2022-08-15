export const compact = <TValue>(value: TValue[]) =>
  Array.isArray(value) ? value.filter(Boolean) : [];
