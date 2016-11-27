'use strict';

const gulp = require('gulp');

gulp.task('skillXproblem', () => {
    console.log('==CREATING SKILLxPROBLEM MATRIX==');

    const MBGDataHelper = require('./MBGDataHelper.js');
    const utils = require('./utils');

    let skillXproblem = MBGDataHelper.skillXproblem();
    console.log(skillXproblem);
});

gulp.task('export_skillXproblem', () => {
    console.log('==EXPORTING SKILLxPROBLEM to CSV file==');

    const fs = require('fs');
    const MBGDataHelper = require('./MBGDataHelper.js');

    const csv = MBGDataHelper.skillXproblemCSV();
    fs.writeFile('./skillXproblem.csv', csv, (err) => {
        if (err) return console.log(err);
        console.log('CSV EXPORTED CORRECTLY');
    });
});

gulp.task('test_querier', () => {
    console.log('==QUERYING TEST==');

    const MBGQuerier = require('./MBGQuerier.js');
    const query = require('./test_payload').query;

    MBGQuerier.query(query, (err, response, body) => {
        if (err) return console.log(err);
        console.log(JSON.parse(body));
    });
});