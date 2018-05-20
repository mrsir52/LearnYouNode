const output = process.argv
sum = 0

for ( let i = 2; i < output.length; i++){
    let str = output[i];
    let num = Number(str);
    sum = sum + num;
}

console.log(sum)