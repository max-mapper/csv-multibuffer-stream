var through = require('through')
var multibuffer = require('multibuffer')
var binaryCSV = require('binary-csv')

module.exports = function(onRow, opts) {
  if (onRow && typeof onRow === 'object') opts = onRow
  if (!opts) opts = {}
  var csv = binaryCSV(opts.lineDelim, opts.cellDelim)
  return through(write)
  
  function write(buf) {
    var cells = csv.line(buf)
    for (var i = 0; i < cells.length; i++) {
      cells[i] = csv.cell(cells[i])
    }
    if (onRow) onRow(cells)
    var mb = multibuffer.pack(cells)
    this.queue(mb)
  }
}
