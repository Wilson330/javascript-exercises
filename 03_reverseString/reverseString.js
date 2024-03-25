const reverseString = function(sentense) {
    let reversedSentense = "";
    for(let i = sentense.length-1;i >= 0;i--){
        reversedSentense += sentense[i];
    }

    return reversedSentense;
};

// Do not edit below this line
module.exports = reverseString;
