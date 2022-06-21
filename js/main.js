// Функция, возвращающая случайное целое число из переданного диапазона включительно,
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; };

const numbers = [];
const getRandomNumberNoRepeat = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (numbers.includes(number)) {return getRandomNumberNoRepeat(min, max);}
  else {
    numbers.push(number);
    return number;
  }
};


//Функция для проверки максимальной длины строки.
const checkLineLength = (line, maxLength) => line.length <= maxLength;
checkLineLength(12, 13);

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


const PEOPLE_COUNT = 25;

const getRandomElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const createComment = () => ({
  id: getRandomNumberNoRepeat(50, 1000),
  avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`,
  message: getRandomElement(MESSAGE),
  name: getRandomElement(NAMES) }
);


let idCount = 0;

const getUniqueNumber = (min) => {
  min = min + idCount;
  idCount = idCount + 1;
  return min;
};

const createPhoto = () => ({

  id: getUniqueNumber(1),
  url: `photos/${  getRandomNumberNoRepeat(1,25)  }.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: createComment() });


const photos = Array.from({length: PEOPLE_COUNT}, createPhoto);

console.log(photos);
