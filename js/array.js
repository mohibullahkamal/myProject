//************************************************
//**** Reverses input ********************************
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1,2,3,4,5]); // 5,4,3,2,1

//************************************************
//**** checks whether all input equal ****************
function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}
//([1,2,2,3,1,1,1]); ---> false

//************************************************
//**** sums up all numbers in array ********************
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}
//sumArray([2,3,2,3]); ---> 10

//************************************************
//**** finds max number in array ***********************
function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr [i];
        }
    }
    return max;
}
//max([2,5,1,6,9,3]); ---> 9