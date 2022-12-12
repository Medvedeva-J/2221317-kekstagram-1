import {COMMENTS, NAMES, commentsIdList} from './data.js';

function getRandomNumber(from, to) {
  if (from < 0 || to < 0) {
    return 'Диапазон может быть только положительным';
  }
  if (from > to) {
    // eslint-disable-next-line prefer-const
    let swap = to;
    to = from;    //При значении "от", большим, чем значение "до", функция переворачивает данный отрезок и всё равно возвращает псевдорандомное числов указанном диапазоне.
    from = swap;   //При равных введённых значениях "от" и "до" функция вернёт это значение.
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function checkStringLength(line, maxLength) {
  return line.length <= maxLength;
}
//вот отсюда начинаются новые методы

function createPhoto(id) {
  const newPhoto = {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Невероятно красивая картинка #${id}`,
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
