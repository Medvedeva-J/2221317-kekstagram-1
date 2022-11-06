import {COMMENTS, NAMES, commentsIdList} from './data.js';

function getRandomNumber(from, to) {
  let result;
  if (from < 0 || to < 0) {
    return 'Диапазон может быть только положительным';
  }
  if (from > to) {
    result = Math.floor(Math.random() * (from - to + 1) + to);       //При значении "от", большим, чем значение "до", функция переворачивает данный отрезок и всё равно возвращает псевдорандомное числов указанном диапазоне.
  } else {                                                                     //При равных введённых значениях "от" и "до" функция вернёт это значение.
    result = Math.floor(Math.random() * (to - from + 1) + from);
  }
  return result;
}

function checkStringLength(line, maxLength) {
  return line.length <= maxLength;
}
//вот отсюда начинаются новые методы

function createPhoto(id) {
  const newPhoto = {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Невероятно красивая картинка',
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 3)}, createComment)
  };
  return newPhoto;
}

function createComment() {
  const newComment = {
    id: commentsIdList.length,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: COMMENTS[getRandomNumber(0, COMMENTS.length - 1)],
    name: NAMES[getRandomNumber(0, NAMES.length - 1)]
  };
  commentsIdList.push(newComment.id);
  return newComment;
}

export {getRandomNumber, checkStringLength, createPhoto, createComment};
