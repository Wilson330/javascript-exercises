const removeFromArray = function(inputArray) {
    const args = Array.prototype.slice.call(arguments, 1)
    let newArray = [];
    for(let i = 0;i < inputArray.length;i++){
        let found = false;
        for(let j = 0;j < args.length;j++){
            if(inputArray[i] === args[j]){
                found = true;
                break;
            }
        }

        if(!found) newArray.push(inputArray[i]);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
