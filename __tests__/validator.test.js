`use strict`;

const validator = require('../src/middleware/validator.js');

describe('testing validator', ()=>{
req={query:{name:undefined}};
res={};
next=jest.fn();

it('testing name validation',()=>{
    validator(req,res,next);
    expect(next).toHaveBeenCalledWith('name is not available')
})

})