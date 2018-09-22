const shell = require('node-powershell');
 
let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});
 
ps.addCommand('ping 157.240.16.35')
ps.invoke()
.then(output => {
  console.log(output);
  ps.dispose();
})
.catch(err => {
  console.log(err);
  ps.dispose();
});