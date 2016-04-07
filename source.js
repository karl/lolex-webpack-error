console.log('start');

var lolex = require('lolex');
var clock = lolex.install();

var time = clock.tick(1);

clock.uninstall();

console.log('done');
