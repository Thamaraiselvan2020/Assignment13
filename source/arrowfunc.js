const oddnumber = (N) => {
    let array=[];
    for(let i=0;i<N;i++){
        if(i%2==0){
            array.push(i);
        }
    }
    return array;
}
console.log(oddnumber(10));