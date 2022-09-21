function solution(n, k) {
    return n & ~(1 << k - 1);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test killK-thBit

// alternative solution
