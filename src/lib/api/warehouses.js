export const getAll = () => fetch("/warehouses.json").then((res) => res.json());
