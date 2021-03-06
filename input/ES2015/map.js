// Map
// 連想配列(オブジェクト)のようなもの
// 連想配列では文字列のみをキーとして使用できるが, Mapではオブジェクトの参照もキーとして使用することができる
// また連想配列に比べ, 操作用のメソッドが豊富である
const map = new Map()

map.set('foo', 'foo')
map.set('bar', 'bar')
map.set('baz', 'baz')

console.log(map)    // Map { 'foo' => 'foo', 'bar' => 'bar', 'baz' => 'baz' }
console.log(map.get('foo')) // foo