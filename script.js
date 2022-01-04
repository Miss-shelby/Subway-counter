//document.getElementById("count-el").innerHTML=6
//you can use .innertext instead of .innerhtml // 
let myAge = 23;
 console.log(myAge);

 let human = 20;
 let dogRatio = human *myAge
 console.log(dogRatio);

 //increamenting and decreasing  variables
 //count = count + 7;
 //console.log(count)
 //count = count -5;
 //console.log(count) 

 //create an increament button
 // intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0;
 console.log(count);
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

function increament() {
    count = count +1
    countEl.innerHTML = count
    console.log(count)
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl

function save() {
    let counter = count + " - "
    saveEl.innerHTML += counter
    //to reset the timer to 0 when we save we have to re-assign our countel to 
    // o in the dom and reset the count to 0 so it starts frm 0 to count again when saved
    countEl.innerHTML = 0
    count = 0
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

}



let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
// Run it three times

function lapIncreament() {
    lapsCompleted =lapsCompleted +1
}
lapIncreament();
lapIncreament();
lapIncreament();

console.log(lapsCompleted)


let sum = document.getElementById("sum-el")
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

function add() {
    let result = num1 + num2 
    sum.textContent = "Sum: " + result
}
add()

function subtract() {
    let result = num1 - num2
    sum.textContent = "Sum: " + result
}
subtract()

function divide() {
    let result = num1 / num2 
    sum.textContent = "Sum: " + result
}
divide()

function multiply() {
    let result = num1 * num2 
    sum.textContent = "Sum: " + result
}
multiply()
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

