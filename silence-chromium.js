#!/usr/bin/env node

'use strict';

var byline = require('byline');
var fs = require('fs');

require('epipebomb')();

var RE_CHROMIUM_LOG_LINE = /^\[.*?:INFO:(?!CONSOLE)/;

var fileName = process.argv[2] || './debug.log';

try {
  var debug = fs.createWriteStream(fileName, {flags: 'a'});

  debug.write(new Date().toISOString() + ' silence-chromium starting\n\n');

  process.stdin.pipe(debug);
} catch (err) {
  process.stdout.write('could not open "' + fileName + '" for writing\n');
}

byline(process.stdin).on('data', function (line) {
  if (RE_CHROMIUM_LOG_LINE.test(line)) {
    return;
  }

  process.stdout.write(line + '\n');
});
