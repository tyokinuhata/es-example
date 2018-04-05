'use strict'

/** 暗黙的なグローバル変数の禁止 */
// var foo = 'foo'
// bar = 'bar'
/** ReferenceError: bar is not defined */

/** 書込不可のプロパティへの代入の禁止 */
// var obj = {}
// Object.defineProperty(obj, 'foo', {
//   value: 'bar',
//   writable: false
// })
// obj.foo = {
//   value: 'baz',
//   writable: true
// }
/** TypeError: Cannot assign to read only property 'foo' of object '#<Object>' */

/** getterのみのプロパティへの代入の禁止 */
// var obj = {
//   get foo () {
//     return 'foo'
//   }
// }
// obj.foo = 'bar'
/** TypeError: Cannot set property foo of #<Object> which has only a getter */

/** 拡張不可オブジェクトへの新規プロパティの割り当て禁止 */
// var obj = {}
// Object.preventExtensions(obj)
// obj.foo = 'foo'
/** TypeError: Cannot add property foo, object is not extensible */

/** 削除できないプロパティの削除の禁止 */
// delete Object.prototype
/** TypeError: Cannot delete property 'prototype' of function Object() { [native code] } */

/** 関数の引数名の重複の禁止 */
// function foo(bar, bar) {}
/** SyntaxError: Duplicate parameter name not allowed in this context */

/** 変数の削除の禁止 */
// var foo = 'foo'
// delete foo
/** SyntaxError: Delete of an unqualified identifier in strict mode. */

/** ８進数リテラルの禁止 */
// var foo = 077
/** SyntaxError: Octal literals are not allowed in strict mode. */

/** eval変数, arguments変数の宣言の禁止 */
// var eval = 'eval'
// var arguments = 'arguments'
/** SyntaxError: Unexpected eval or arguments in strict mode */

/** withの禁止 */
// with (Math) {
//   var x = cos(2)
// }
/** SyntaxError: Strict mode code may not include a with statement */

/** 幾つかの識別子が予約語になるため使用禁止
 * implements
 * interface
 * let
 * package
 * private
 * protected
 * public
 * static
 * yield
 * */
// var interface = 'interface'
/** SyntaxError: Unexpected strict mode reserved word */