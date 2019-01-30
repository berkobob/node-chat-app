const moment = require("moment");

console.log(new Date());
console.log(new Date().getTime());
console.log(new Date().toTimeString());

var date = moment();
console.log(date.format("hh:MM a"));

date.add(1, "hour");
console.log(date.format("HH:MM:SS"));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
