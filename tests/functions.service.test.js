const functionsService = require('../service/functions');

describe('test functions ', () => {
  it('sum 2 + 1 equial to 3', () => {
    const example = [1,2,3]
    expect(functionsService.getLowestValue(example)).toBe(1);
  });

  
}) 
