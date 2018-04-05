class Foo {
    constructor() {
        this.name = 'foo'
    }
}

class Bar extends Foo {
    constructor() {
        super()
        this.name = 'bar'
    }
}

const foo = new Foo()
const bar = new Bar()

console.log(foo.name)
console.log(bar.name)