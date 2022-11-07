var electron = require('electron');
var {ipcRenderer} =electron;

ipcRenderer.on("item:add", function(e,item){  //untuk terima guna ipcRenderer.on (address yg mengatakan dia terima)
    var newItem = document.createElement('li');
    newItem.innerHTML = `${item.name} - ${item.description} -${item.place}`
    document.getElementById("list").appendChild(newItem); //untuk display item kita
})

ipcRenderer.on("item:clear", function(){ // untuk clear item
    document.getElementById("list").innerHTML = "";
})

function getMakeup(){
    let searchprod = document.getElementById('search-input').value.trim();
    let userprice = document.getElementById('price-input').value.trim();
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchprod}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let htmlmakeup = "";
        //if(data){
            // forEach() method calls a function for each element in array from API makeup.
            data.forEach(makeup => {
                if (makeup.price < userprice && makeup.price != null && makeup.price != 0.0 && makeup.brand != null){
                    console.log("H");
                //    assign element access in array to var
                    var brand = (makeup.brand);
                    var price = (makeup.price);
                    var prod = (makeup.product_type);
                    var img = (makeup.image_link);
                    var name = (makeup.name);
                    
                    // to display element inside aray in html
                    htmlmakeup += `
                    <div class="cardmakeup">
                    <h1 class="title">
                        <b><strong>${brand}</strong></b>
                    </h1>
                    <br><br><br>
                    <img src=${img} alt="Image for this makeup product is unavailable" class="imgmakeup">
                    <p class="name">${name}</p>
                    <p class="prodtype">${prod}</p>
                    <p class="price">${price}$</p>
                    </div>`

                    

                    document.getElementById("makeup").innerHTML = htmlmakeup;
                } //it will not display any product with price=null
            })
        
           
        
    })
}

// to open window crud
function Opencrud(){
    window.location.href = "crud.html"
}