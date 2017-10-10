/* To fetch args from console */

/**
node src/node/processArgv.js 12 13
returns
[ '/Users/srath/.nvm/versions/node/v6.9.4/bin/node',
  '/Users/srath/git_pvt/javascript-tutorial/src/node/processArgv.js',
  '12',
  '13' ]
**/
let args = process.argv;

console.log(args);
