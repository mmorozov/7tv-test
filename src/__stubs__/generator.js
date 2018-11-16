export default (mock, n) =>
  Array.apply(null, Array(n)).map((_, index) => mock({ id: index + 1 }));
