# csv-multibuffer-stream

Transform stream that accepts raw CSV data and emits the rows as [multibuffers](http://npmjs.org/multibuffer).

[![NPM](https://nodei.co/npm/csv-multibuffer-stream.png)](https://nodei.co/npm/csv-multibuffer-stream/)

## usage

```js
var csvBuffStream = require('csv-multibuffer-stream')
var encoder = csvBuffStream()
fs.createReadStream('data.csv').pipe(csvBuffStream).pipe(httpPostToSomeServer)
```

optional arguments: `csvBuffStream(onRow, csvParsingOptions)`

```js
var encoder = csvBuffStream(onRow)

function onRow(cells) {
  // gets called on every row with the cells in the row before they get packed
}
```

the `csvParsingOptions` are passed directly to [binary-csv](https://npmjs.org/package/binary-csv)

```js
var opts = {
  separator: '\t'
}
var encoder = csvBuffStream(opts)
```

use a [multibuffer-stream](https://npmjs.org/package/multibuffer-stream) `.unpackStream()` to decode the data on the other end
