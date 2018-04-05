const foo = 'hoge'
const bar = 'hoge'
console.log(foo === bar)    // true

// Symbol
const baz = Symbol('hoge')
const qux = Symbol('hoge')
console.log(baz === qux)    // false