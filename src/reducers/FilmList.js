const filmList = (state = {}, action) =>{

    switch (action.type) {
        case 'SET_ALL_FILMS_FROM_API':
            let categoryList = action.filmList.map((v)=>v.category) ;
            return {
                ...state,
                allFilmList: action.filmList,
                categories: [... new Set( categoryList)]
            };


        case 'SET_PRINTED_FILMS':
            return {
                ...state,
                printedFilmList: action.filmList
            };

        case 'DELETE_FILM':
            return {
                ...state,
                allFilmList: state.allFilmList.filter( (film) =>  film.id !== action.id ),
                printedFilmList: state.printedFilmList.filter( (film) =>  film.id !== action.id ),
            }

        default:
            return state;
    }

}

export default filmList;


