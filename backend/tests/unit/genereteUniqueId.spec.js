const generateUniqueId = require('../../src/utils/genereteUniqueId');

describe('Generete Unique Id', () => {
  it('should generate an unique Id', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  })
});