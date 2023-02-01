const minimist = require('minimist');

const { argv } = process;
const resetArgv = minimist(argv.slice(2));

console.log(argv, resetArgv.token);
