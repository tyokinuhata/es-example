// イテラブル
// イテレータを持つオブジェクト
// Symbol.iterator()メソッドを実行すると, イテレータを返す
const obj = {}
obj[Symbol.iterator] = () => {
    // イテレータ
    // next()メソッドを持ち, 実行するとリテレータリザルトを返すもの
    const iterator = {}
    let count = 1
    iterator.next = () => {
        // イテレータリザルト
        // 取り出した値, 取り出したかどうかの真偽値を持つオブジェクト
        const iteratorResult = count <= 10
            ? {
                value: count++,
                done: false
            }
            : {
                value: undefined,
                done: true
            }
        return iteratorResult
    }
    return iterator
}

for (const value of obj) {
    console.log(value)  // 1 2 3 4 5 6 7 8 9 10
}