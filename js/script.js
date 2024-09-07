const form = document.querySelector("#form");
const number = document.querySelector("#number");
const multiplier = document.querySelector("#multiplier");
const multiplicationTable = document.querySelector(".resultContainer")
const chosenNumber = document.querySelector(".subtitle span")

const createTable = (number, multiplierNumber) => {
  multiplicationTable.innerHTML = "";
  for(let i=1; i<=multiplierNumber; i++){
    const result = number * i;
    const template = `<div class="row">
      <div class="operation">${number} x ${i} = </div>
      <div class="result">${result}</div>
      </div>`;
    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");
    
    const row = htmlTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);  
  }
  chosenNumber.innerText = number;
}



form.addEventListener("submit", (e) => {

  e.preventDefault(); //to not reload the page and manipulate js
  const multiplicationNumber = +number.value;
  const multiplierNumber  = +multiplier.value;

  //If any of the numbers are not present in the form, nothing is returned.
  if(!multiplicationNumber || !multiplierNumber){
    return;
  }

  //When both numbers are present in the form
  createTable(multiplicationNumber, multiplierNumber);
})