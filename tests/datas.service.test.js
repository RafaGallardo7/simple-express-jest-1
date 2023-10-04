const dataService = require('../service/datas');

describe('test functions ', () => {
  it('sum 2 + 1 equial to 3', () => {    
    expect(dataService.getMessage()).toBe("Message2");
  });

  
}) 
