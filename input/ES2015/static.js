class Foo {
    constructor(name) {
        this.name = name
    }

    // クラスメソッド(静的メソッド)
    // クラス名.メソッド名 で呼び出せるメソッド
    static getRandom() {
        return Math.random()
    }
}

console.log(Foo.getRandom())