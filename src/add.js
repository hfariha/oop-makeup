//import utk hantar ke mana2
var electron = require ('electron') //every new window bukak kne import library ni
var {ipcRender} = electron;



function addNewItem(){ //sama dgn add.html button onclick function addNewItem tu
    var name = document.getElementById('name_input').value;
    var description = document.getElementById("description_input").value;
    var place = document.getElementById("place_input").value;

    var newItem = {
       name:name, //assign from input box
       description: description,
       place:place
    }

    console.log(newItem);
    alert(newItem.name)
    alert(newItem.description)
    alert(newItem.place)

    //menghantar ke mana2
    ipcRender.send('item:add', newItem); //utk send (return) data
}