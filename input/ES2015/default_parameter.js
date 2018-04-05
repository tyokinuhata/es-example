// 関数のデフォルト引数
const multiply = (a, b = 8) => {
    return a * b
}

console.log(multiply(2))    // 16
console.log(multiply(2, 4)) // 8