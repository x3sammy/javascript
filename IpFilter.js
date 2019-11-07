'use strict';
var res='this is the last ip 255.50.222.200 hellow world 21.0.22.25';
var pat=/\b((([0-9]?[0-9])|([01][0-9][0-9])|(2[0-4][0-9])|(25[0-5]))\.){3}((25[0-5])|(2[0-4][0-9])|([01][0-9][0-9])|([0-9]?[0-9]))\b/g;
var mat=res.match(pat);
console.log(mat);
