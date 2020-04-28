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
    if (a % 2 !== 0){
    	return true;
    } else {
    	return false;
    }
}

function prime(a) {
    if (a % 2 === 0 && a > 2){
    	return false;
    } else if (a % a === 0 ){
    	return true;
    } else {
    	return false;
    }
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