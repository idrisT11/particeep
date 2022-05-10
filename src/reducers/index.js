import {combineReducers} from 'redux';
import filter from './Filter';
import likedFilms from './LikedFilms';
import filmList from './FilmList';
import pagination from './Pagination';

export default combineReducers({
    likedFilms,
    filter,
    filmList,
    pagination
});