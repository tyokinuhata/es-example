// クラスベース
class Foo {
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
class Bar extends Foo {
    // オーバーライド
    sayHello() {
        console.log("Hi, I'm " + this.getName())
    }
}

const foo = new Foo('foo')
const bar = new Bar('bar')

foo.sayHello()
bar.sayHello()