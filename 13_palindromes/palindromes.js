function removePunctuation(text) {
    var punctuation = /[\.,?!]/g;
    var newText = text.replace(punctuation, "");
    return newText.replaceAll(' ', '').toLowerCase();
}

// r a c e c a r 

const palindromes = function (string) {
    let processString = removePunctuation(string);
    let stringLength = processString.length
    for (let i = 0; i < stringLength / 2; i ++){
        if (processString[i] !== processString[stringLength -1 - i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
