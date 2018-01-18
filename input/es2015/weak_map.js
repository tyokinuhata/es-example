// Map
// キーによるオブジェクトの参照がMapよりも弱く保持され, オブジェクトへの参照が存在しない場合はガベージコレクション(GC)の対象となる
// そのため, キーが列挙可能ではない(すなわち, キーのリストを取得するメソッドがない)
const weakmap = new WeakMap()

weakmap.set({}, 'foo')
weakmap.set({}, 'bar')
weakmap.set({}, 'baz')

console.log(weakmap)
console.log(weakmap.get({}))