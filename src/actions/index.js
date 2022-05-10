
export const setLikeList = (length) => ({
    type: 'SET_LIKE_LIST',
    length
})

export const toggleLike = (id) => ({
    type: 'TOGGLE_LIKE',
    id
})

export const toggleDislike = (id) => ({
    type: 'TOGGLE_DISLIKE',
    id
})

export const changeFilter = (condition) =>({
    type: 'CHANGE_FILTER',
    condition//Here condition should be a list of "film categories"
})


export const setAllFilmsFromAPI = (filmList) =>({
    type: 'SET_ALL_FILMS_FROM_API',
    filmList
})

export const setPrintedFilmsList = (filmList) =>({
    type: 'SET_PRINTED_FILMS',
    filmList
})

export const deleteFilm = (id) =>({
    type: 'DELETE_FILM',
    id
})

export const setNbFilmPage = (nb) =>({
    type: 'SET_NB_FILM_PAGE',
    nb
})

export const setPage = (pageNumber) =>({
    type: 'SET_PAGE',
    pageNumber
})