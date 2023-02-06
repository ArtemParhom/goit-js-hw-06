const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector(`.gallery`);

// const makeListVsImageEl = images.map(option => {
//   const listEl = document.createElement(`li`);
//   listEl.insertAdjacentHTML(`beforeend`, `<img src=${option.url} alt=${option.alt}></img>`);
//   return listEl;
// });
// console.log(makeListVsImageEl);
// galleryEl.append(...makeListVsImageEl);

const makeArrayUrlsEl= images.map(option => `<li><img src=${option.url} alt=${option.alt}></img></li>`).join("");

galleryEl.insertAdjacentHTML(`beforeend`, makeArrayUrlsEl);