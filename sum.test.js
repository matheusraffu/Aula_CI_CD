const sum = (a, b) => a + b;

describe('testes unitarios', () => {
  test('soma 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('soma de negativos', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
});
