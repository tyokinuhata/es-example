// 型付き配列
// 8bit符号なし整数値を格納可能な配列の領域を８個確保
const array = new Uint8Array(8)
array[0] = 256  // 8bit長符号なし整数値では255までしか格納できないため, 0が格納される
array[1] = 255

console.log(array)  // Uint8Array [ 0, 255, 0, 0, 0, 0, 0, 0 ]

// Int8Array ... 8bit長２の補数方式符号付き整数値
// Uint8Array ... 8bit長符号なし整数値
// Uint8ClampedArray ... 8bit長符号なし整数値(切り詰め)
// Int16Array ... 16bit長２の補数方式符号付き整数値
// Uint16Array ... 16bit長符号なし整数値
// Int32Array ... 32bit長２の補数方式符号付き整数値
// Uint32Array ... 32bit長符号なし整数値
// Float32Array ... 32bit長IEEE方式浮動小数点数値
// Float64Array ...64bit長IEEE方式浮動小数点数値