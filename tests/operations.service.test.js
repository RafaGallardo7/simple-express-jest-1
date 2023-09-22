const operationService = require('../service/operations');

describe('test oeprations functions ', () => {
  it('sum 2 + 1 equial to 3', () => {
    expect(operationService.getSum(2, 1)).toBe(3);
  });

  test('subtraction 3 - 1 equial to 2', () => {
    expect(operationService.getSubstraction(3, 1)).toBe(2);
  });

  // test('subtraction 6 / 2 equial to 3', () => {
  //   expect(operationService.divide(6, 2)).toBe(3);
  // });
}) 
