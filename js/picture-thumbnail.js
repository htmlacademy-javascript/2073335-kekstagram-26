//import {photos} from './main.js';


const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const renderPhoto = (photos) => {

  const pictureElementFragment = document.createDocumentFragment();
  const pictureListElement = document.querySelector('.pictures');

  photos.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElementFragment.appendChild(pictureElement);
  });

  pictureListElement.appendChild(pictureElementFragment);
};

export {renderPhoto};
