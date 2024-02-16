const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
})

test('10158 + 30679 = 40837', () =>{
    expect(add(10158, 30679)).toBe(40837)
})

test('65561541 + 95285425 = 160846966', () =>{
    expect(add(65561541, 95285425)).toBe(160846966)
})