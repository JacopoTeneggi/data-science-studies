'use strict';

const request = require('request');
const MBG_Data = require('./mbgdata.js');

const csv = MBG_Data.skillXproblem2CSV();
console.log(csv);
// https://www.googlesciencefair.com/make-better-generator/api?hl=it
//&skill=elettricità ed elettronica
//&love=music
//&problem=Ricostruzione 3D
//&skillid=0&callback=wc_1477556599558
const generatorUrl = 'https://www.googlesciencefair.com/make-better-generator/api';