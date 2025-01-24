// precedece of this operrator is 1st value if it is not undefined else the second value will be save in a vraiable 

let val = undefined ?? undefined ?? null ?? undefined ?? 0;
console.log(val);
val = undefined ?? 10;
console.log(val);
val = 10 ?? 12;
console.log(val);
val = null ?? 12;
console.log(val);
