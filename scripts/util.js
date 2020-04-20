/* eslint-disable import/no-commonjs */
const { exec } = require('child_process');
const cwd = process.cwd();

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

function failWithMessage(msg) {
    console.error(msg);
    process.exit(1);
}

module.exports = {
    runFromCwd,
    failWithMessage
};
