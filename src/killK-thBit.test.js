const solution = require('./killK-thBit.js');

test('test 1', () => {
    expect(solution(37, 3)).toBe(33);
});

test('test 2', () => {
    expect(solution(37, 4)).toBe(37);
});

test('test 3', () => {
    expect(solution(37, 2)).toBe(37);
});

test('test 4', () => {
    expect(solution(0, 4)).toBe(0);
});

test('test 5', () => {
    expect(solution(2147483647, 16)).toBe(2147450879);
});

test('test 6', () => {
    expect(solution(374823748, 13)).toBe(374819652);
});

test('test 7', () => {
    expect(solution(2734827, 4)).toBe(2734819);
});

test('test 8', () => {
    expect(solution(1084197039, 15)).toBe(1084197039);
});

test('test 9', () => {
    expect(solution(1160825071, 3)).toBe(1160825067);
});

test('test 10', () => {
    expect(solution(2039063284, 4)).toBe(2039063284);
});
