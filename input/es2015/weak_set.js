// Setと違い, オブジェクト専用のコレクション
// オブジェクトの参照がSetよりも弱く保持され, オブジェクトへの参照が存在しない場合はガベージコレクション(GC)の対象となる
// そのため, キーが列挙可能ではない
const weakset = new WeakSet()

weakset.add({})
weakset.add({})
weakset.add({})

console.log(weakset)