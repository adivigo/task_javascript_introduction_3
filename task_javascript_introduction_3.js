let num = '';
for(let i = 5; i >= 1; i--){
    for(let j = 0; j < i; j++)
        num += j+1;
    console.log(num);
    num = '';
}