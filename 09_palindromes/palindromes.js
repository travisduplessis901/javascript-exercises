const palindromes = function (word) {
    
    let test = word.toLowerCase();

    wordLength = word.length;
    arrForward = [];
    arrBackward = [];


    /*function taken from https://javascript.plainenglish.io/javascript-check-if-string-contains-special-characters-8e9e1f1e74bd
      modified to include spaces*/
    function containsSpecialChars(str) { 
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const space = / /;
        
        if (specialChars.test(str) == true || space.test(str) == true){
            return true;
        }
        else{
            return false;
        }
      }

    for (i = 0; i < wordLength; i++) {
        if (containsSpecialChars(test.substring(i , (i + 1 ))) == true) {
            continue;
        }

        arrForward.push(test.substring(i, (i + 1)));
    }

    console.log(arrForward);

    for (i = (wordLength - 1) ; i >= 0 ; i--){
        if (containsSpecialChars(test.substring(i , (i + 1 ))) == true)  {
            continue;
        }
        arrBackward.push(test.substring(i , (i + 1)));
    }
   
    console.log(arrBackward);

    let flag = true;

    for (i = 0 ; i < wordLength ; i++){
        if (arrForward[i] != arrBackward[i]){
            flag = false;
            break;
        }
    }

    return flag;


};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
