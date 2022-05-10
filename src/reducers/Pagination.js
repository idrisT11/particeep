const pagination = (state=[], action) => {
    
    switch (action.type) {
        case 'SET_NB_FILM_PAGE':
            return {
                ...state,
                nbFilmPage: action.nb
            };
            

        case 'SET_PAGE':
            return {
                ...state,
                pageNumber: action.pageNumber
            };
            


        default:
            return state;

    }


}


export default pagination;