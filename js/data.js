import {getRandomNumber, createNumberPool} from './util.js';

const numberPoolId = createNumberPool(50,1000);
const numberPoolUrl = createNumberPool(1,25);
const PEOPLE_COUNT = 25;


const NAMES = [
  'Мария',
  'Дмитрий',
  'Карина',
  'Наталья',
  'Виктор',
  'Евгений',
  'Маргарита',
  'Геннадий',
  'Марина',
  'Александра',
  'Даниил',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Разве жизнь не прекрасна?',
  'Дома',
  'Просто красиво',
  'Сегодня был классный день!',
  'И зачем все это',
  'Размышляю',
  'Ухожу в реальную жизнь, всем пока!',
  '100 лайков и опубликую новое фото',
  'Всем спасибо за внимание!',
];


const getRandomElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const createComment = () => ({
  id: numberPoolId(),
  avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`,
  message: getRandomElement(MESSAGE),
  name: getRandomElement(NAMES)
});
//сделано, чтобы создавалось рандомное количество комментариев, и создавался массив и считался в picture-thumbnails
const createComments = () => Array.from({length: getRandomNumber(1,10)}, () => createComment);

const createPhoto = (id) => ({
  id,
  url: `photos/${numberPoolUrl()}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: createComments()
});

const createPhotos = () => Array.from({length: PEOPLE_COUNT}, (id, index) => createPhoto(index + 1));

export {createPhotos};
