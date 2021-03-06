'use strict';

// varによる従来の変数宣言と初期化
var foo = 'foo';
console.log(foo); // foo

// 再代入
foo = 'FOO';
console.log(foo); // FOO

// 再宣言
var foo = 'foo';
console.log(foo); // foo


// letによる変数宣言と初期化
var bar = 'bar';
console.log(bar); // bar

// 再代入
bar = 'BAR';
console.log(bar); // BAR

// 再宣言
// let bar = 'bar'
// console.log(bar) // error
