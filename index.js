function buy(name) {
    debugger;
    // find me the element that matches this conditions (i.e a tbody child element of another element with id='cart')
    let cart = document.querySelector('#cart tbody');
    // appends a row to the tbody element
    let newItem = cart.insertRow();

    let itemName = newItem.insertCell(0);
    itemName.innerHTML = name;

    let elementId = '#' + name.replace(' ', '');
    
    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;

    let itemQuantity = newItem.insertCell(2);
    itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;

    let subTotal = newItem.insertCell(3);
    subTotal.innerHTML = '$' + itemPrice.innerHTML.replace("$","") * itemQuantity.innerHTML;

    //resets the input value so the quantity of the original order doesn't "stick"
    document.querySelector(elementId + ' td .quantity').value = '';

    //calculate the total
    let total = 0;
    document.querySelectorAll('#cart tbody tr').forEach(row => { 
        //convert the subtotal to an int using parse int because it is currently being read as a string
        total = total + parseInt(row.cells[3].innerHTML.replace('$',''))
    });
    document.querySelector('#total').innerHTML = '$' + total;
}
function checkout()
{
    document.querySelectorAll('#cart tbody tr').forEach(row => row.remove());
    alert("thanks for buying")

}