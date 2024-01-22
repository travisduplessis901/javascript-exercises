const removeFromArray = function(array, ...args) {

    function item(array){
        return !args.includes(array);
    }

    return array.filter(item);

};



// Do not edit below this line
module.exports = removeFromArray;
