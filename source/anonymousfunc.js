let array=[1,2,3,4,5];
let sum=0;
let a = function (arr) {
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
};
a(array);
console.log(sum)