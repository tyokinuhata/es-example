// ブラケット({})によるブロックスコープ
{
    var foo = 'foo'
    let bar = 'bar'
    const baz = 'baz'

    console.log(foo)    // foo
    console.log(bar)    // bar
    console.log(baz)    // baz
}

console.log(foo)    // foo
// console.log(bar)    // error
// console.log(baz)    // error