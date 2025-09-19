const sumToN2 = (n: number): number => {
    if (n == 0) {
        return n;
    }
    return n + sumToN2(n - 1);
}

console.log(sumToN2(3)); 

/**
 * Time Complexity: O(n) - make n recursive calls
 * Space Complexity: O(n) - due to recursive call stack
 */
