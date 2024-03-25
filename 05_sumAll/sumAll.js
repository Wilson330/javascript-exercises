const sumAll = function(initialNum, finalNum) {
    if(typeof(initialNum) !== "number" || typeof(finalNum) !== "number" ||
       initialNum < 0 || finalNum < 0) return "ERROR";
    
    return (initialNum + finalNum) * (Math.abs(finalNum - initialNum) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
