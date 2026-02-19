const URL = "https://jsonplaceholder.typicode.com/comments";
let btn = document.querySelector("#button1");
let contain = document.querySelector("#container");

const getFacts = async ()=>{
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data[0].body);

    for(let i = 0 ; i<data.length ; i++){
    let ID = document.createElement("h2");    
    let header = document.createElement("h3");    
    let p = document.createElement("p");
    p.innerText = "Body: " + data[i].body;
    header.innerText = "Header: " + data[i].name;
    ID.innerText = "ID: " + data[i].id;
    
    contain.append(ID);
    contain.append(header);
    contain.append(p);
    }
}




btn.addEventListener("click" , getFacts);