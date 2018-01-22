class Foo {
    // コンストラクタ
    constructor(name) {
        this.name = name
    }

    // ゲッター
    get getName() {
        return this.name
    }

    // セッター
    set setName(name) {
        this.name = name
    }
}

const foo = new Foo('foo')

console.log(foo.getName)

foo.setName = 'bar'

console.log(foo.getName)