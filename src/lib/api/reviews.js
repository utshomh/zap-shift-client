export const getAll = () => fetch("/reviews.json").then((data) => data.json());
