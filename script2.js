
/*const result=document.getElementById("jk");
result.innerHTML="<b>"Hello World</b>";

const result=document.getElementById("p1");
result[1].innerHTML="chauhan";

const result=document.getElementsByTagName("p");
result3[2].innerHTML="this is a pet";
result3[1].style.color="blue";
result[1].innerText="my paragraph"

const result=document.getElementById("jk").getAttribute("class");

const heading=document.createElement("h2");

let promise = new Promise((resolve,reject)=>{
    let success=true;
    if (success)
        resolve("Data Loaded");
    else
        Reject("Error Occurred");

})
promise.then(result => console.log(result))
.catch(error => console.log(error));

async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await response.json();
    console.log(data);
}
getData();


//Fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));


//Try BLock
try{
    var x = y + 10;
}catch(error){
    console.log(error.message);
}


//Store DATA

localStorage.setItem("Name","Jeet");*/


//Retreive Data
var name1=localStorage.getItem("name");
console.log(name1);

//remove Data
localStorage.removeItem("name");

// store object;
var user = {name:"jeet",age:50};
localStorage.setItem("user",JSON.stringify(user));   

//reterive objects;
var retrievedUser = localStorage.getItem("user");
console.log(JSON.parse(retrievedUser));    