// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber();
//Функция для проверки максимальной длины строки.
const checkLineLength = (line, maxLength) => line.length <= maxLength;


checkLineLength();
