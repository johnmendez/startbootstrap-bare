var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1 array named products
var products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99',
              ];
for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  var subArray = products[i].split(':');

  // number 4
  var name = subArray[0];
  var price = Number(subArray[1]);
  total += price;

  // number 5
  itemText = name + ' - $' + price;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
