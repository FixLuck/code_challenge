const sumToN3 = (n: number) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(sumToN3(5)); // Output: 15

/**
 * Time Complexity: O(n) -> loop run n times
 * Space Complexity: O(1) -> only a few variables are used regardless of input size
 */
