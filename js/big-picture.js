const pictureHide = document.querySelector('.big-picture');
pictureHide.classList.remove('hidden');
const commentCountHide = document.querySelector('.social__comment-count');
const commentLoaderHide = document.querySelector('.comments-loader');
commentCountHide.classList.add('hidden');
commentLoaderHide.classList.add('hidden');
document.body.classList.add('modal-open');


const renderBigPhotos = (photos) => {

  const bigPhotos = document.querySelector('.big-picture');


  photos.forEach (({url, likes, description, comments})  => {

    bigPhotos.querySelector('.big-picture__img img').src = url;
    bigPhotos.querySelector('.likes-count').textContent = likes;
    bigPhotos.querySelector('.social__caption').textContent = description;
    bigPhotos.querySelector('.comments-count').textContent = comments.length;


  });
};


const commentTemplate = document.querySelector('#comment-template')
  .content
  .querySelector('.social__comment');


const commentElementFragment = document.createDocumentFragment();
const commentsListElement = document.querySelector('.social__comments');

const renderComment = (comment) => {


  comment.forEach ((comments) => {
    const commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comments.avatar;
    commentElement.querySelector('.social__picture').alt = comments.name;
    commentElement.querySelector('.social__text').textContent = comments.message;
    commentElementFragment.appendChild(commentElement);
  });
  commentsListElement.appendChild(commentElementFragment);
  return commentElementFragment;
};


const renderComments = (render) => {
  for (let i = 0; i < render.comments.length; i++) {
    renderComment(render.comments[i]);
  }
};


const closeWindow = () => {

  document.body.classList.remove('modal-open');
  pictureHide.classList.add('hidden');
};

const buttonCancel = document.querySelector('.big-picture__cancel');
buttonCancel.addEventListener('click', () => {
  closeWindow();
});

document.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape') {
    closeWindow();

  }
});


export {renderBigPhotos, renderComment, renderComments};
