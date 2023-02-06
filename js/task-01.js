const categoryEl = document.querySelectorAll(`#categories .item`);

    console.log(`Number of categories: ${categoryEl.length} \n `);

// categoryEl.forEach(element => {
//     console.log(`Category: ${element.querySelector(`h2`).textContent} \n Elements: ${element.querySelectorAll(`li`).length} \n `);  
// });

categoryEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent} \n Elements: ${element.lastElementChild.children.length} \n `);  
});



