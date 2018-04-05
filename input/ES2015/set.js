// Set
// 重複の無い配列
const set = new Set()

set.add('foo')
set.add('bar')
set.add('foo').add('baz')   // メソッドチェーン

console.log(set)    // Set { 'foo', 'bar', 'baz' }