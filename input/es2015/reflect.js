// Reflect
// Proxyによってメソッドのデフォルトの振る舞いが変更されるが, そうした場合にデフォルトの振る舞いを再現するために使用される
const target = {}
const handler = {
    set: (target, name, value) => {
        if (typeof value === 'number') {
            value *= 2
        }
        target[name] = value
        return Reflect.set(target, name, 100)
    }
}

const proxy = new Proxy(target, handler)

proxy.foo = 100
proxy.bar = 200
proxy.baz = "200"

console.log(proxy.foo)  // 200
console.log(proxy.bar)  // 400
console.log(proxy.baz)  // 200