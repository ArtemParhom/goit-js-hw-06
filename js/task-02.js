const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ingredientsEl = document.querySelector(`#ingredients`);

const ingredientsArray =[];

ingredients.forEach(element => {  
  const itemEl = document.createElement(`li`); 
  itemEl.textContent = element;
  ingredientsArray.push(itemEl); 
});
ingredientsEl.append(...ingredientsArray);