// クラスメソッド(静的メソッド)
// クラス名.メソッド名 で呼び出せるメソッド
class Foo {
    // コンストラクタ
    constructor(name) {
        this.name = name
    }
    static getRandom() {
        return Math.random()
    }
}

console.log(Foo.getRandom())