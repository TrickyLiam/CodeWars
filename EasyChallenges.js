// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

function add(a, b) {
    return a + b;
}

console.log(add(3, 2));


// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
//Create a function that accepts a Date object and returns true if it's 
//Christmas Eve(December 24th) and false otherwise.Keep in mind JavaScript's Date month is 0 based, 
//meaning December is the 11th month while January is 0.

// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

function xmasEve(date) {
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 11 & day === 24) {
        return true;
    } else {
        return false;
    }
    }

    console.log(xmasEve(new Date(2013, 11, 24)));
    console.log(xmasEve(new Date(2013, 0, 23)));