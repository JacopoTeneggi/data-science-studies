'use strict';

const request = require('request');
const MBGDataHelper = require('./MBGDataHelper.js');

const _url = 'https://www.googlesciencefair.com/make-better-generator/api'
const _defaultOps = {
    hl: 'en'
};

module.exports = class MBGQuerier {

    static query(query, callback) {
        if (!query.love || !query.skill || !query.problem) return callback('Fulfill the query');
        let skillId = MBGDataHelper.getSkillId(query.skill);
        if (!MBGDataHelper.problemExistsForSkill(skillId, query.problem)) return callback('Skill problem error');
        let ops = _defaultOps;
        ops.love = query.love;
        ops.skill = query.skill;
        ops.problem = query.problem;
        ops.skillid = skillId;
        request({ url: _url, qs: ops }, (err, response, body) => {
            if(err) return callback(err);
            return callback(err, response, body);
        });
    };

};