import {createPhotos} from './data.js';


const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureElementFragment = document.createDocumentFragment();
const copyPhotos = createPhotos();
const pictureListElement = document.querySelector('.pictures');


copyPhotos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElementFragment.appendChild(pictureElement);
});


pictureListElement.appendChild(pictureElementFragment);

