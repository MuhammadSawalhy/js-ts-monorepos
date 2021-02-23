const fs = require('fs');
const { spawnSync } = require('child_process');
const readline = require('readline');

if(!fs.existsSync('./dist')) {
  console.log(`can' test without building`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('do you want to build?', (answer)=>{
    if (/^\s*(yes)?\s*$/i.test(answer)) {
      spawnSync(`yarn build`, [], {
        stdio: "inherit",
        shell: true
      });
    }
    rl.close();
  });
}
