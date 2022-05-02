// I am 27 years old.
var myAge = 27;

// The value of this variable is set to 2 but it will change.
var earlyYears = 2;

earlyYears *= 10.5;

// This variable subtracts two years from my current agae, but this value will be reassigned.
var laterYears = myAge - 2;

// Used multiplicatior assignment operator to reassign value
// laterYears converts human years to dog years.
// Dog years conversion rate slows after the first 2 years
laterYears *= 4;

// Dog years conversion rate changes  between the first 2 years and later years.
// Add each converted span of time to get true age in dog years.
var myAgeInDogYears = earlyYears + laterYears;

// Should return a string with all lowercase methods
var myName = 'TayLor';
console.log(myName.toLowerCase());

// String interpolation used to apply variable values to sentence frame.
// Don't forget to use back ticks instead of apostraphes
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
