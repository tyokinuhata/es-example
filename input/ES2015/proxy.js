// Proxy
// メソッドの振る舞いを変更できる機能
const target = {}
const handler = {
    set: (target, name, value) => {
        if (typeof value === 'number') {
            value *= 2
        }
        target[name] = value
    }
}

const proxy = new Proxy(target, handler)

proxy.foo = 100
proxy.bar = 200
proxy.baz = "200"

console.log(proxy.foo)  // 200
console.log(proxy.bar)  // 400
console.log(proxy.baz)  // 200