// Map
// キーによるオブジェクトの参照がMapよりも弱く保持され, オブジェクトへの参照が存在しない場合はガベージコレクション(GC)の対象となる
// そのため, キーが列挙可能ではない(すなわち, キーのリストを取得するメソッドがない)
const weakmap = new WeakMap()

const foo = {}
const bar = {}
const baz = {}

weakmap.set(foo, 'foo')
weakmap.set(bar, 'bar')
weakmap.set(baz, 'baz')

console.log(weakmap)
console.log(weakmap.get(foo))