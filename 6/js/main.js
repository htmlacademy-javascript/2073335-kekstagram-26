import './data.js';
import {createComments, createPhotos} from './data.js';
import './picture-thumbnail.js';
import {renderPhoto} from './picture-thumbnail.js';
import './big-picture.js';
import {renderBigPhotos} from './big-picture.js';
import { renderComment, renderComments } from './big-picture.js';

renderPhoto(createPhotos());
renderBigPhotos(createPhotos());
renderComment(createComments());
renderComments(createComments());
