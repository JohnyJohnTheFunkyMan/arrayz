var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  var input = document.querySelector('#box').value;
  if (input) {
    var number = input;
    var numArr = Array.from(number);

    for (var i = 0; i < numArr.length; i++) {
      if (numArr[i]%2==0 && numArr[i+1]%2==0) {
        numArr.splice(i+1, 0, '-');
      }
    }
    alert(numArr.join(''));
  }
})
