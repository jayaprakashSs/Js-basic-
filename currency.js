let myNumber = 99999.12;

myNumber=myNumber.toLocaleString
("hi-IN",{style:"currency",currency:"INR"});
// myNumber=myNumber.toLocaleString("en-US",{style:"currency",currency:"USD"});

console.log(myNumber)