// Map
// 連想配列のようなもの
const map = new Map()

map.set('foo', 'foo')
map.set('bar', 'bar')
map.set('baz', 'baz')

console.log(map)    // Map { 'foo' => 'foo', 'bar' => 'bar', 'baz' => 'baz' }
console.log(map.get('foo')) // foo