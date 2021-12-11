var btn = document.querySelector('#btn'); // gets the button element and stores it in a variable called 'btn'
btn.addEventListener('click', () => { // adds an event listener to 'btn' whenever it's clicked
  var input = document.querySelector('#box').value; // gets the value inside of textbox/form and stores it in a variable called 'input'
  if (input) { // tests if input exists
    var number = input; // assigns the value of 'input' into a new variable called 'number'
    var numArr = Array.from(number); // creates an array of digits with the variable 'number' and stores it in a variable called 'numArr'

    for (var i = 0; i < numArr.length; i++) {
      if (numArr[i]%2==0 && numArr[i+1]%2==0) { // tests whenever the item in the current index of the for loop is %2=0 and if the index next to the current one is also %2=0
        numArr.splice(i+1, 0, '-'); // if the condition above tests as true, it inserts a '-' specifically between the current i and i+1
      }
    }
    alert(numArr.join('')); // combines everything inside the array 'numArr' and turns it into a string of text which is then alerted to the user
  }
})
