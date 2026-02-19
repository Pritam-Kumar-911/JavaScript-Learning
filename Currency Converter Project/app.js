const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

let selectItems = document.querySelectorAll(".select-box");
let image = document.querySelector(".image1");

console.log(selectItems);

for(let select of selectItems){

    for(let code in countryList){
    // console.log(code + " " + countryList[code]);
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if(select.name === "from" && code === "USD"){
        newOption.selected = 'selected';
    }
    if(select.name === "to" && code === "PKR"){
        newOption.selected = 'selected';
    }
    select.append(newOption);
    }
    select.addEventListener("change" , (evt)=>{
        updateFlag(evt.target);
    })
}
let currencyCode = "";


const updateFlag = async (element)=>{
    let toCurrency = document.querySelector("#to-select");
    let store = toCurrency.value.toLowerCase();

    let fromCurrency = document.querySelector("#from-select");
    let store2 = fromCurrency.value;

    let amount = document.querySelector("#area");

    let currencyCode = element.value;
    console.log(currencyCode);
    console.log(element);
    let countryCode = countryList[currencyCode];
    console.log(countryCode);

    // let newImage = document.createElement("img");
    // newURL = `https://flagsapi.com/${countryCode}/flat/64.png`;
    // image.src = newURL;

    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let variable = currencyCode.lo
    console.log("Fetching API");
    let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${store2.toLowerCase()}.json`;
    let response = await fetch(URL);
    console.log(response);
    let answer = await response.json();
    console.log(answer);
    console.log(store);
    console.log(answer[store2.toLowerCase()][store]);

    // let toCurrency = document.querySelector("#to-select");
    // let store = toCurrency.value;

    // let fromCurrency = document.querySelector("#from-select");
    // let store2 = fromCurrency.value;

    // let amount = document.querySelector("#area");

    console.log(amount.value);
    console.log(store);
    console.log(store2);

    let CalculatedAmount = amount.value*answer[store2.toLowerCase()][store];

    let message = document.querySelector("#msg");
    message.innerHTML = `${amount.value} ${store2} = ${CalculatedAmount} ${store.toUpperCase()}`;

}

let submitButton = document.querySelector("#lastboxtext");

submitButton.addEventListener("click" , ()=>{
    let fromCurrency = document.querySelector("#from-select");
    updateFlag(fromCurrency);
})

// selectItems.addEventListener(click , ()=>{
//     let newImage = document.createElement("img");
//     newImage.src = `https://flagsapi.com/${countryList[code]}/flat/64.png`;
// })

