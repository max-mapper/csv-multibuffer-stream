var test = require('tape')
var concat = require('concat-stream')
var csvBuffStream = require('../')

test('encodes as expected', function(t) {
  var encoder = csvBuffStream()
  encoder.pipe(concat(function(output) {
    t.equal(output.toString('hex'), '110000000000000100020003000400050006')
    t.end()
  }))
  
  encoder.write('a,b,c\n1,2,3\n4,5,6')
  encoder.end()
})