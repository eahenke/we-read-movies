/* eslint-disable import/no-commonjs */
const { exec } = require('child_process');
const ghpages = require('gh-pages');

/* CONSTANTS */
const cwd = process.cwd();
const DEPLOYMENT_BRANCH = 'master';
const PUBLISH_DIRECTORY = 'public';

/* Option parsing */
const commandArgs = process.argv.slice(2);

const COMMAND_OPTS = {
    DIRTY: '--dirty',
    CURRENT_BRANCH: '--current-branch'
};
function matchBooleanArg(opt) {
    return commandArgs.find(arg => arg === opt);
}
const canRunDirty = matchBooleanArg(COMMAND_OPTS.DIRTY);
const canRunCurrentBranch = matchBooleanArg(COMMAND_OPTS.CURRENT_BRANCH);

function runFromCwd(cmd, ...args) {
    const options = args.length < 1 ? {} : args[0];

    return new Promise((resolve, reject) => {
        exec(
            cmd,
            {
                cwd,
                ...options
            },
            (error, stdout, stderr) => {
                if (error) return reject(error);
                if (stderr) return reject(new Error(stderr));

                return resolve(stdout);
            }
        );
    });
}

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

return Promise.all([gitBranch(), checkIsCleanRepo()]).then(([branch, isClean]) => {
    // console.log('branch', branch, DEPLOYMENT_BRANCH);
    if (branch !== DEPLOYMENT_BRANCH && !canRunCurrentBranch) {
        console.error(
            `You are trying to deploy from a branch other than ${DEPLOYMENT_BRANCH}. If you wish to do this, run with ${COMMAND_OPTS.CURRENT_BRANCH}`
        );
        process.exit(1);
    }
    if (!isClean && !canRunDirty) {
        console.error(
            `Your git working tree is dirty. Please commit your changes before deploying, or run with ${COMMAND_OPTS.DIRTY}`
        );
        process.exit(1);
    }

    ghpages.publish(PUBLISH_DIRECTORY, (...args) => {
        console.log('args', args);
    });
});
