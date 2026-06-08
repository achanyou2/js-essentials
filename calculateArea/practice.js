function groceryTracker(item1, item2, item3) {
  num1 = parseFloat(document.getElementById(item1).value);
  num2 = parseFloat(document.getElementById(item2).value);
  num3 = parseFloat(document.getElementById(item3).value);

  let total = num1 + num2 + num3;
  document.getElementById('total').innerText = `The total amount is: ${total}`;

}