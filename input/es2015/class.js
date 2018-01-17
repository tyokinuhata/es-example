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
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log("Hello, I'm " + this.getName())
    }
    getName() {
        return this.name
    }
}

// 継承
class Baz extends Bar {
    // オーバーライド
    sayHello() {
        console.log("Hi, I'm " + this.getName())
    }
}

const foo = new Foo('foo')
const bar = new Bar('bar')
const baz = new Baz('baz')

foo.sayHello()
bar.sayHello()
baz.sayHello()