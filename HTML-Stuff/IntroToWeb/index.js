function buy(name) {
    
    let cart = document.querySelector('#cart tbody');
    let newItem = cart.insertRow();

    let itemName = newItem.innerCell(0);
    itemName.innerHTML = name;

    let elementId = '#' name.replace(' ', '');
    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementId+' .price').value;
}