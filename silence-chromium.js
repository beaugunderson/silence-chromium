#!/usr/bin/env node

'use strict';

var byline = require('byline');

require('epipebomb')();

var RE_CHROMIUM_LOG_LINE = /^\[.*?:INFO:(?!CONSOLE)/;

byline(process.stdin).on('data', function (line) {
  if (RE_CHROMIUM_LOG_LINE.test(line)) {
    return;
  }

  process.stdout.write(line + '\n');
});
