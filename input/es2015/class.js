// プロトタイプベース
const Foo = function (name) {
    this.name = name
}

Foo.prototype.getName = function () {
    return this.name
}

Foo.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.getName())
}

// クラスベース
class Bar {
    // コンストラクタ
    constructor(name) {
        this.name = name
    }
    // メソッド
    sayHello() {
        console.log("Hello, I'm " + this.getName())
    }
    getName() {
        return this.name
    }
}

const foo = new Foo('foo')
const bar = new Bar('bar')

foo.sayHello()
bar.sayHello()