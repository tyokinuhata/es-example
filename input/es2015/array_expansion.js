const array = [ 1, 2, 3, 4 ]

// 従来の構文
console.log(array)
console.log(Math.max.apply(null, array))

// 配列展開
console.log(array)
console.log(Math.max(... array))