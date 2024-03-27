const palindromes = function (str) {
    let newStr = str.replace(/\s+/g, "");
    newStr = newStr.replace(/,/g, "");
    newStr = newStr.replace(/\./g, "");
    newStr = newStr.replace(/!/g, "");
    newStr = newStr.toLowerCase();
    console.log(newStr);

    for(let i = 0;i <= (newStr.length/2);i++){
        if(newStr[i] !== newStr[(newStr.length - i - 1)]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
