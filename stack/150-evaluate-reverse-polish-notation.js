/**
 * 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * Problem:
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 */

/**
 * -------------------------------
 * Optimal Solution (Stack)
 * -------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function isOperator(ch) {
    return ch === '+' || ch === '-' || ch === '*' || ch === '/';
}

function calculate(operator, b, a) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return Math.trunc(a / b);
    }
}

var evalRPN = function (tokens) {
    const stk = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const b = stk.pop();
            const a = stk.pop();
            stk.push(calculate(token, b, a));
        } else {
            stk.push(Number(token));
        }
    }

    return stk[0];
};
