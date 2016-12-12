/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
console.log("is this thing on?")
var q
var d
var n
var p
var coinPurse = {quarters: q, dimes: d, nickels: n, pennies: p}
var amountInput = document.getElementById("amount").value
console.log(coinPurse)

// listen for enter key in text input and run coinCounter
document.getElementById("amount").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    console.log("hi")
    // coinCounter
  }
})

// function coinCounter (q, d, n, p) {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {
//     quarters: q,
//     dimes: d,
//     nickels: n,
//     pennies: p
//   };

//   coinPurse.quarters = 0;

//   console.log(coinPurse)
//   document.getElementById("amount").innerHTML = coinPurse
// }

// coinCounter
// var coins = coinCounter()
// console.log(coinPurse);

// coinPurse = `
//       <p>Quarters: ${q}</p>
//       <p>Dimes: ${d}</p>
//       <p>Nickels: ${n}</p>
//       <p>Pennies: ${p}</p>
//             `

// document.getElementById("amount").innerHTML = coinPurse
