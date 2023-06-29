function showAlert() {
    var name = document.getElementById("name").value;
    var iceCream = document.getElementById("ice-cream").checked;
    var chocolate = document.getElementById("chocolate").checked;

    if(name === "") {
        document.getElementById("name-alert").style.display = "block";
    }

    var message = "Вы выбрали:";
    if(iceCream) {
        message += "Мороженое";
    }
    if(chocolate){
        message += "Шоколад";
    }
    alert(message);

    document.getElementById("name").value = "";
    document.getElementById("ice-cream").checked = false;

    document.getElementById("chocolate").checked=false;
}