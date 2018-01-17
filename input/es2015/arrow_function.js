// アロー関数

// 処理が一文の場合はブラケット({})とreturnを省略可能
const getTriangle = (base, height) => base * height / 2
console.log(getTriangle(3, 2))

// 引数が１つの場合は引数を括る()を省略可能
const getCircle = radius => {
    return radius * radius * Math.PI
}
console.log(getCircle(3))

// 引数が無い場合
const getHello = () => {
    return 'hello'
}
console.log(getHello())



// 従来の無名関数とアロー関数のthisの比較
const Sample = function (func) {
    return {
        array: [ 1, 2, 3, 4 ],
        func: func
    }
}

// 無名関数 ... 関数が実行される時点でthisが決定される
const anon_func = function () {
    console.log(this.array)
}
const anon_obj = new Sample(anon_func)
anon_obj.func()

// アロー関数 ... 関数が定義された時点でthisが決定される
const arrow_func = () => {
    console.log(this.array)
}
const arrow_obj = new Sample(arrow_func)
arrow_obj.func()