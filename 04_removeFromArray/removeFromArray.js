const removeFromArray = function() {
    let array = arguments[0];
    //iterate after 1st argument in array
    for(let i = 1; i < arguments.length; i++){
        while (array.includes(arguments[i])){
            array.splice(array.indexOf(arguments[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
