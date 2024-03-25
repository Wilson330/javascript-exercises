const repeatString = function(sentense, times) {
    if(times < 0) return "ERROR";
    
    let repeatedString = "";
    for(let i = 0;i < times;i++){
        repeatedString += sentense;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
