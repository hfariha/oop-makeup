const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var btnUpdate = document.getElementById('btnUpdate')
var fileName = document.getElementById('fileName') //user masukkan inbox and nk capture

// retrieve input makeup from user
var displaydata = document.getElementById('displaydata')
var makeup1 = document.getElementById('makeup1')
var makeup2 = document.getElementById('makeup2')
var makeup3 = document.getElementById('makeup3')
var makeup4 = document.getElementById('makeup4')
var makeup5 = document.getElementById('makeup5')

let pathName = path.join(__dirname, 'Files') //directory untuk pegi dekat files

btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button guna eventlistener
  let file = path.join(pathName, fileName.value) //file directory, file name
  let contents = "Makeup List : "+"\n\n 1." + makeup1.value + "\n\n 2." + makeup2.value + "\n\n 3." + makeup3.value + "\n\n 4." + makeup4.value + "\n\n 5." + makeup5.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){ //kalau ada error dia kluar output utk error
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was created")  //keluar dialogue box 
    console.log("The file was created") 
        
  
  })
  
})

btnUpdate.addEventListener('click', function(){  //creating text file when user click CREATE button guna eventlistener
    let file = path.join(pathName, fileName.value) //file directory, file name
    let contents = "Makeup List : "+"\n\n 1." + makeup1.value + "\n\n 2." + makeup2.value + "\n\n 3." + makeup3.value + "\n\n 4." + makeup4.value + "\n\n 5." + makeup5.value
    fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
      if(err){ //kalau ada error dia kluar output utk error
        return console.log(err)
      }
      var txtfile = document.getElementById("fileName").value
      alert(txtfile + " text file was updated")  //keluar dialogue box 
      console.log("The file was updated") 
          
    
    })
    
})

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value) //text file created based on what user input, join several file
 
  fs.readFile(file, function(err,data){  //read
    if(err){
      return console.log(err)
    }
    displaydata.value = data
  })
  
})


btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
 
  fs.unlink(file, function(err){  //method untuk delete
    if(err){
      return console.log(err) //clearkan text file
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file has successfully deleted")
    fileName.value = ""
    makeup1.value = ""
    makeup2.value = ""
    makeup3.value = "" 
    makeup4.value = ""
    makeup5.value = "" 
    
  })
  
})


function Backpage(){
    window.location.href = "index.html"
}


