import countXO from './countXsAndOs'

test('countXO check if number Xs and Os are equal', ()=>{
    expect(countXO('sdslxcxxlsdjo')).toBe(false)
    expect(countXO('xxoo')).toBe(true)
    expect(countXO('sdsfd')).toBe(true)
    expect(countXO('OoXx')).toBe(true)
})