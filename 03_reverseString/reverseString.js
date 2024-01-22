const reverseString = function(string) {

    const characters = [];
    let length = string.length;

    for (i = 0 ; i < length ; i++){
        characters[i] = string.charAt(i);
    }

    let reverseString = "";

    for (i = length - 1; i >= 0 ; i--){
        reverseString = reverseString + characters[i];
    }

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
