// ジェネレータ
// イテレータを強力にサポートする機能
// ジェネレータはイテラブルなオブジェクトであり, イテレータでもある
const generator = function* () {
    yield 1
    yield* [ 2, 1, 2 ]
}

for (const value of generator()) {
    console.log(value)  // 1 2 1 2
}

const g = generator()

console.log(g.next())   // { value: 1, done: false }
console.log(g.next())   // { value: 2, done: false }
console.log(g.next())   // { value: 1, done: false }
console.log(g.next())   // { value: 2, done: false }
console.log(g.next())   // { value: undefined, done: true }