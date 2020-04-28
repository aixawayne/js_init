function sum(a, b) {
    return(a+b);
}

function even(a) {
    if(a % 2 === 0 ){
    	return true;
    } else {
    	return false;
    }
}


function odd(a) {
    throw 'not implemented';
}

function prime(a) {
    throw 'not implemented';
}

function sumAll(numbers) {
    throw 'not implemented';
}

module.exports = {
    sum,
    even,
    odd,
    prime,
    sumAll,
};
//this is a test