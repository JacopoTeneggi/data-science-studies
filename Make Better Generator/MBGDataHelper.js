'use strict';

const unique = require('array-unique');
const fs = require('fs');
const utils = require('./utils.js');

const MBGData = require('./MBGData.json');
const _skills = MBGData.skills;
const _problems = MBGData.problems;

module.exports = class MBGDataHelper {
    static get skills() {
        return _skills;
    };

    static get problems() {
        return _problems;
    };

    static problemsVocab() {
        let vocab = [];
        for (var k in _problems) {
            vocab = vocab.concat(_problems[k]);
        }
        vocab = unique(vocab)
        return vocab;
    };

    static skillXproblemMatrix() {
        let out = [];
        let vocab = this.problemsVocab();
        vocab.map((problem) => {
            let row = []
            for (let k in _problems) {
                row[k] = _problems[k].includes(problem) ? 1 : 0;
            }
            out.push(row);
        });
        return out;
    };

    static skillXproblemCSV() {
        let matrix = this.skillXproblemMatrix();
        let headers = ['Problem'].concat(_skills);
        let csv = utils.matrix2csv(headers, this.problemsVocab(), matrix);
        fs.writeFile('./skillXproblem.csv', csv, (err) => {
            if (err) return console.log(err);
            return "Matrix Exported 2 CSV file";
        })
    };

    static getSkillId(skillName) {
        let id = _skills.indexOf(skillName);
        if (id == -1) return null;
        return id;
    };

    static problemExistsForSkill(skillid, problemName) {
        return _problems[skillid].includes(problemName);
    };
}

