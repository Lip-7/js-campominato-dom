function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
    setTimeout(() => {
        content2.style.opacity = 1;
      }, 10);
};
function giveVisibility(value){
  const content = document.getElementById(value);
  content.classList.remove('d-none');
  setTimeout(() => {
    content.style.opacity = 1;
  }, 10);
}
function preventSubmitRefresh(form){
  form.addEventListener('submit', (e) => {
      e.preventDefault();
} )
};
function randomNumber(max) {
  return Math.round(Math.random() * (max - 1)) + 1;
};
function generateLi(listIngredients, listToAppend, tohide, toshow) {
let iterable = 0;
const ulDestination = document.getElementById(listToAppend);
while (iterable < listIngredients.length){
    const ingredient = document.createElement('li');
    ingredient.innerText = listIngredients[iterable];
    ulDestination.appendChild(ingredient);
    iterable++;
}
switchVisibility(tohide, toshow)
};
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};
function drawSquare(content, width){
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `calc(100% / ${width})`;
  square.style.height = `calc(100% / ${width})`;
  square.innerHTML = content;
  return square;
}
function generateBombs(nBombs, squareNumber){
  const bombsArray = []
  while (bombsArray.length < nBombs){
      const bomb = randomNumber(squareNumber);
      if (!bombsArray.includes(bomb)) {
          bombsArray.push(bomb);
      }
  }
  return bombsArray;
}
function simulateClick(element) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
  element.dispatchEvent(new Event('removeClick'));
}
function clickAll (list) {
  let alreadyClicked = ['bomb','safe']
  for (let i = 0; i < list.length; i++) {
      if (!alreadyClicked.includes(list[i].classList[1])) {
          simulateClick(list[i])
      }
  }
}
function showAllBombs(bombsArray) {
  const squares = document.querySelectorAll('.square')
  for (let square of squares) {
      if (bombsArray.includes(parseInt(square.innerText))) {
          square.classList.add('bomb')
      }
  }
}