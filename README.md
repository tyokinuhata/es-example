# es-example
ECMAScriptの新機能まとめ

# ディレクトリ構造

```
.
├── input
│   └── esXXXX
│       └── ...
├── output
│   └── esXXXX
│       └── ...
├── com.sh
├── run.sh
└── module_run.sh

```

|ファイル/ディレクトリ|説明|
|:--|:--|
|input|ESXXXXで記述されたソースコード|
|output|Babelでトランスパイルされたソースコード(ただしES5のコードはない)|
|com.sh|トランスパイル用シェル|
|run.sh|実行用シェル|
|module_run.sh|実行用シェル(import/export用)|

# ES5
|機能|ファイル/ディレクトリ名|
|:--|:--|
|ゲッター・セッター|getter_setter.js|
|予約語のプロパティ名使用|reserved_word_property.js|
|strictモード|strict.js|
|末尾カンマ無視|trailing_commas.js|

# ES2015

|機能|ファイル/ディレクトリ名|
|:--|:--|
|import/export|import_export|
|Promise|promise|
|アロー関数|arrow_function.js|
|２進数・８進数リテラル|binary_octal.js|
|ブロックスコープ|block_scope.js|
|クラス構文|class.js|
|const宣言|const.js|
|関数のデフォルト引数|default_parameter.js|
|分割代入|destructuring_assignment.js|
|継承|extend.js|
|分割代入|destructuring_assignment.js|
|for ... ofループ|for_of.js|
|ジェネレータ|generator.js|
|ゲッター・セッター|getter_setter.js|
|イテレータ|iterator.js|
|let宣言|let.js|
|Map|map.js|
|Proxy|proxy.js|
|Reflect|reflect.js|
|可変長引数|rest_parameter.js|
|Set|set.js|
|static|static.js|
|super|super.js|
|シンボル|symbol.js|
|テンプレートリテラル|template_literal.js|
|型付き配列|typed_array.js|
|WeakMap|weak_map.js|
|WeakSet|weak_set.js|
