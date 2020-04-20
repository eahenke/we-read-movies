/* eslint-disable import/no-commonjs */
const { runFromCwd } = require('./util');

function gitBranch() {
    return runFromCwd('git rev-parse --abbrev-ref HEAD').then(branch => branch.replace('\n', ''));
}

function gitStatus() {
    const MODIFIED = 'modified';
    const UNTRACKED = 'untracked';
    const tokens = {
        M: MODIFIED,
        '??': UNTRACKED
    };
    const parsed = {
        [MODIFIED]: [],
        [UNTRACKED]: []
    };

    return runFromCwd('git status --porcelain').then(result => {
        const outputLines = result.trim().split('\n');

        return outputLines.reduce((accum, line) => {
            const [firstToken, file] = line.split(/\s+/);
            const category = tokens[firstToken];
            if (category && accum[category]) {
                accum[category].push(file);
            }

            return accum;
        }, parsed);
    });
}

function checkIsCleanRepo() {
    return gitStatus().then(status => status.modified.length === 0 && status.untracked.length === 0);
}

module.exports = {
    gitBranch,
    gitStatus,
    checkIsCleanRepo
};
