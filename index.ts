// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies

let Cookies: Cookie[] = [];

init();
// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
function init() {
  //TODO: add code here
  // create the two cookies
  let Cookie1: Cookie = new Cookie('Cookie1');
  let Cookie2: Cookie = new Cookie('Cookie2');
  // add them to the array
  Cookies.push(Cookie1);
  Cookies.push(Cookie2);

  // add them as options in the select/dropdown (cookieSelector) element
  let addCookieName: string;
  //loop

  for (let i in Cookies) {
    addCookieName += `<option value="${Cookies[i].name}">${Cookies[i].name}</option>`;
  }
  //add to dropdown

  (document.getElementById('cookieSelector') as HTMLOptionElement).innerHTML =
    addCookieName;

  // initialise the cookieColour-inp to the colour of the first cookie created
  (document.getElementById('cookieColour-inp') as HTMLInputElement).value =
    Cookies[0].colour;

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  // get the colour boxs
  let cookieDiv: string = '';
  for (let i in Cookies) {
    // get the colour box
    cookieDiv += `<div class="cookie" style="background-color:${Cookies[i].colour}">${Cookies[i].choclateChipNum}</div>`;
  }
  (document.getElementById('cookiesDiv') as HTMLDivElement).innerHTML =
    cookieDiv;
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
// Event listener
// creating a varible that sets to the Change Colour Button
const changeColourBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById('changeColour-btn')
);
// add the event to the button
changeColourBtn.addEventListener('click', changeColour);
function changeColour() {
  // set varible of current typed input
  let cookieColourInput: string = (
    document.getElementById('cookieColour-inp') as HTMLInputElement
  ).value;
  // set varible of current cookie selected dropdown
  let cookieSelectedDropdown: string = (
    document.getElementById('cookieSelector') as HTMLOptionElement
  ).value;
  // UI Display
  for (let i in Cookies) {
    // colour
    if (cookieSelectedDropdown === Cookies[i].name) {
      Cookies[i].colour = cookieColourInput;
      break;
    }
  }
  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
// event listener
const changeChipNumButt: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById('addChocolateChip-btn')
);
// add the event to the button
changeChipNumButt.addEventListener('click', addChocolateChip);
function addChocolateChip() {
  //get chip count
  let cookieSelectedDropdown: string = (
    document.getElementById('cookieSelector') as HTMLOptionElement
  ).value;
  // UI Display
  for (let i in Cookies) {
    // colour
    if (cookieSelectedDropdown === Cookies[i].name) {
      Cookies[i].choclateChipNum++;
      break;
    }
  }

  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
