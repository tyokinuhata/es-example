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