const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const resetButton = document.querySelector('button');
resetButton.style.backgroundColor='white';
let color="black";
let amountOf = 16;
const grid =(blocks)=>{
  const warapper= document.createElement('div');
  warapper.classList.add('warapper');
  for (let i=0; i<blocks;i++){
      const row = document.createElement('div');
      row.classList.add('row');
  
  for (let j=0; j<blocks; j++) {
  const gridBlock= document.createElement("div");
  gridBlock.classList.add('gridblock')
  gridBlock.classList.add('gridBlock');
  gridBlock.addEventListener('mouseover',colorDiv)
  container.insertAdjacentElement("beforeend",gridBlock)
    
  
    
  row.appendChild(gridBlock)
}
warapper.appendChild(row)          
}
container.appendChild(warapper)
}

grid(amountOf);
resetButton.addEventListener('click',()=>{
  let inputSize=Number(prompt('Choose the size of the grid'))
  while (inputSize>100){
    inputSize=Number(prompt("Pick a size that can't be more than 100"))
    
  }
  const warapper=document.querySelector('.warapper');
  warapper.remove();
  grid(inputSize);
})
let currentColor;
function colorDiv() {
  
  if (currentColor === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (currentColor==='eraser'){
    this.style.backgroundColor = 'white';
  } else {
    this.style.backgroundColor = 'black';
  }
}

function setColor(colorChoice) {
  currentColor = colorChoice;
}
function resetBoard() {
 let divs=document.querySelectorAll("div");
 divs.forEach((gridBlock) =>
 gridBlock.style.backgroundColor="white");
 }
