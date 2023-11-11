// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCorqUobb0tpSNIyAjTiBWOJ3xfx-AqBt0",
  authDomain: "learnsuite-b3ef6.firebaseapp.com",
  projectId: "learnsuite-b3ef6",
  storageBucket: "learnsuite-b3ef6.appspot.com",
  messagingSenderId: "79573471985",
  appId: "1:79573471985:web:166eaf6f2233b7cff6cf50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);







// Variables
let size = 0;
let currentCardIndex = 0;
let is_on_term = true;

const terms = [];
const definitions = [];
const creatingCardsColumn = document.getElementById("creatingCards");
const addMoreBtn = document.getElementById("addMore");
const generateBtn = document.getElementById("generateBtn");
const cardBackBtn = gebi("cardBackBtn");
const cardFlipBtn = gebi("cardFlipBtn");
const cardNextBtn = gebi("cardNextBtn");
const cardText = gebi("cardText");

function gebi(id){
  return document.getElementById(id);
}

// Event Listeners
if(document.URL.includes("createcardset.html")){
  addMoreBtn.addEventListener("click", createNewCard);
  generateBtn.addEventListener("click", generate);
}
if(document.URL.includes("learncards.html")){
  cardBackBtn.addEventListener("click", prevCard);
  cardFlipBtn.addEventListener("click", cardFlip);
  cardNextBtn.addEventListener("click", nextCard);
}



function createNewCard(){


    var div = document.createElement("div");
    div.style.width="100px";
    div.style.height="30px";
    creatingCardsColumn.appendChild(div);

    createOneSide("Term: ", "input", 1, 100);
    createOneSide("Definition: ", "textarea", 2, 200);
    size = size + 1;
    

  }

// Function creating the input forms
function createOneSide(name, type, height, width){
    var input = document.createElement(type);
    var label = document.createElement("Label");
    label.innerHTML = name;

    input.setAttribute("type", "text");
    input.setAttribute("value", "");
    input.setAttribute("name", name);
    input.setAttribute("style", "width:" + width + "px")
    input.setAttribute("id", name+size)
    input.rows = ""+height;

    creatingCardsColumn.appendChild(label);
    creatingCardsColumn.appendChild(input);
    
    
  }

// Generate the card arrays
function generate(){
    console.log("Reached Generate")
    setTermsAndDefinitions()
    console.log("Set complete")
}


// Actual function for setting up the terms and definitions
function setTermsAndDefinitions(){
    for(let i=0; i < size; i++){
      let term = document.getElementById("Term: "+i);  
      terms[i] = term.value; 
      let definition = document.getElementById("Definition: "+i);
      definitions[i] = definition.value;

      }
    console.log(terms);
    console.log(definitions);

  }

function cardFlip(){
  console.log(definitions);
  console.log("reached flip");
  if(is_on_term==true){
    let val = definitions[currentCardIndex];
    cardText.innerHTML = val;
  }
}

function nextCard(){
  console.log("reached Next");
}

function prevCard(){

}



