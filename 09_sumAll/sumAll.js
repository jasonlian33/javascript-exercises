const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0){
        return "ERROR";
    } else if(!Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR";
    } else if(typeof int1 !== 'number' || typeof int2 !== 'number'){
        return "ERROR";
    } else{
        let sum = 0;
        let start = Math.min(int1, int2);
        let end = Math.max(int1, int2);
        for (let i = start; i < end +1; i++){
            sum += i;
        }
        return sum;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
