'use strict';

const request = require('request');
const MBGDataHelper = require('./MBGDataHelper.js');

const result = MBGDataHelper.skillXproblemCSV();
console.log(result);
// https://www.googlesciencefair.com/make-better-generator/api?hl=it
//&skill=elettricità ed elettronica
//&love=music
//&problem=Ricostruzione 3D
//&skillid=0&callback=wc_1477556599558
const generatorUrl = 'https://www.googlesciencefair.com/make-better-generator/api';