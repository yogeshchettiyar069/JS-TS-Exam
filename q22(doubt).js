let arr = [10,20,30,40];
const a = function(arr){
    return arr.reduce((sum,num) => sum + num, 0);
    
}

console.log(a);
