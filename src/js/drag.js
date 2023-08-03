import axios from "axios";



export default class Drag{
    constructor(){

    }
}


 //selettori
  const summary = document.querySelector(".summary");
  const category = document.querySelector(".category");
  const input = document.querySelector("input");
  const score = document.querySelector(".score");
  const textScore = document.querySelector(".textScore");
  const cercaBtn = document.querySelector("button");
   let city ='';

  //pulisco i dati
  let pulisci = function () {
    category.innerHTML = "";
    textScore.innerHTML = "";
    score.innerHTML = "";
  }

  let formatCityName = function (name) {
    name = name.toLowerCase();
    name = name.trim();
    name = name.replaceAll(" ", "-");
    return name;
  };


// // variabile di ENV
 const API_URL = process.env.API_URL;


 const getData = async function(){
  const response = await 
  //creata variabile di env *API_URL*
  fetch(API_URL + `${city}/scores/`)
 
  const data = await response.json();


  if(response.status != 404){
    summary.innerHTML=
    //inserisco il SUMMARY 
    `
    <div class="uno">
    <h1 class="summaryTitle">${city.charAt(0).toUpperCase() + city.slice(1).replace()} summary <h1><p class="sum">${data.summary}</p>
    </div>
    <hr>
    `;

    category.innerHTML = "";
      //inserisco il cityscore
      textScore.innerHTML = `<h1>Data score of ${city.charAt(0).toUpperCase() + city.slice(1).replace()}</h1>`
      score.innerHTML =`<p class="cityScore">  ${data.teleport_city_score.toFixed(2)} /100</p> <hr>`
       //le categorie
       data.categories.forEach((a) => {
        category.insertAdjacentHTML(
          "afterbegin",
          `<div class="due">
          <ul> <span style="color: ${a.color};"> ${a.name}: ${a.score_out_of_10.toFixed(1).slice(0, 4)}<span></ul>
          </div> 
          `
          )
        });
    
      } else{
        //messaggio di errore 
        errorMessage(
          `<h1 class="error">Error, City not found, write the name in English. If the city is not found, it is not in the database<h1>`
        );
        pulisci();
      }

      
    };
  

  const errorMessage = (warningMessage) => {
    summary.innerHTML = `<p>${warningMessage}</p>`;
    return warningMessage;
  };
//messaggio di errore se non viene inserito alcun nome 
  const errorEmpty = () => {
    if (!input.value) {
      errorMessage(`<h1 class="notName">Write a city name<h1>`);
      pulisci();
    }
  };

  input.addEventListener("keydown", function (enterkey) {
    if (enterkey.key === "Enter") {
      city = formatCityName(input.value);
      getData();
      errorEmpty();
    }
  });
  //evento parte ricerca al click
  cercaBtn.addEventListener("click", function () {
    city = formatCityName(input.value);
    getData();
    errorEmpty();
  });