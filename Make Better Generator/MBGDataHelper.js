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

    static get problemsVocab() {
        let vocab = [];
        utils.forKey(_problems, (item, index) => {
            vocab = vocab.concat(item);
        });
        vocab = unique(vocab)
        return vocab;
    };

    static skillXproblem() {
        let vocab = this.problemsVocab;
        let skillXproblem = utils.mapEach(vocab, (item, index) => {
            let problem = item;
            let problems = this.problems;
            utils.forKey(problems, (item, index) => {
                let val = item.includes(problem[0]) ? 1 : 0;
                problem.push(val);
            });
            return problem;
        });
        return skillXproblem;
    };

    static skillXproblemCSV() {
        let matrix = this.skillXproblem();
        let headers = ['Problem'].concat(_skills);
        let csv = utils.matrix2csv(headers, matrix);
        return csv;
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

