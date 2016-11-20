'use strict';

const request = require('request');
const MBGDataHelper = require('./MBGDataHelper.js');

const _url = 'https://www.googlesciencefair.com/make-better-generator/api'
const _defaultOps = {
    hl: 'en'
};

module.exports = class MBGQuerier {

    static query(love, skill, problem, callback) {
        if (!love || !skill || !problem) return callback('Fulfill the query');
        let skillId = MBGDataHelper.getSkillId(skill);
        if (!MBGDataHelper.problemExistsForSkill(skillId, problem)) return callback('Skill problem error');
        //here is to make the call to the API
    };
    
};