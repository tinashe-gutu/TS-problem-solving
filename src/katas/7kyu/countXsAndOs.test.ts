import countXO from './countXsAndOs'

test('countXO check if number Xs and Os are equal', ()=>{
    expect(countXO('sdslxcxxlsdjo')).toBe(false)
    expect('xxoo').toBe(true)
    expect('sdsfd').toBe(false)
    expect('OoXx').toBe(true)

})