// 従来の代入
const foo = 'foo'
const bar = 'bar'
const baz = 'baz'
const qux = 'qux'
const quux = { value: 'quux' }
console.log(foo, bar, baz, qux, quux)   // foo bar baz qux { value: 'quux' }

// 配列の分割代入
const [ corge, grault, garply, waldo, fred ] = [ 'corge', 'grault', 'garply', 'waldo', { name: 'fred' } ]
console.log(corge, grault, garply, waldo, fred)

// オブジェクトの分割代入
const { plugh, xyzzy, thud, hoge, fuga } = { plugh: 'plugh', xyzzy: 'xyzzy', thud: 'thud', hoge: 'hoge', fuga: { fuga: 'fuga' } }
console.log(plugh, xyzzy, thud, hoge, fuga)
