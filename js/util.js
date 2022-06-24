//Функция, передающая случайное число из переданного диапазона
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Функция для проверки максимальной длины строки.
const checkLineLength = (line, maxLength) => line.length <= maxLength;
checkLineLength(12, 13);


const createNumberPool = (min, max) => {
  if (min < max) {
    const pool = new Set();
    return () => {
      if (pool.size >= max - min) {

        throw Error('pool size exceeded');
      }
      let val = getRandomNumber(min, max);
      while (pool.has(val)) {
        val = getRandomNumber(min, max);
      }

      return val;
    };
  }
};

export {getRandomNumber, createNumberPool};
