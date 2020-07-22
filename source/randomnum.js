var a=10000000;
var b=99999999;
var res=[],rand;
var output=getRandomArbitrary(a,b);
function getRandomArbitrary(min, max) {
    rand=Math.floor(Math.random() * (max - min) + min);
    res=(""+rand).split("");
    console.log(res);
    for(let i=0;i<res.length;i++){
        for(let j=i+1;j<res.length;j++){
            if(res[i]==res[j]){
                getRandomArbitrary(a,b);
            }
        }
    }
    return rand;
}
console.log(output);




