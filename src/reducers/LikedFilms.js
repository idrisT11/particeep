const likedFilms = (state=[], action) => {
    
    switch (action.type) {
        case 'TOGGLE_LIKE':
            return state.map((filmCarte)=>{

                if (filmCarte.id === action.id) 
                    return {likeValue:(filmCarte.likeValue!='LIKED')?'LIKED':'', id:filmCarte.id}
                
                else
                    return {...filmCarte};

            });
            

        case 'TOGGLE_DISLIKE':
            return state.map((filmCarte)=>{

                if (filmCarte.id === action.id) 
                    return {likeValue:(filmCarte.likeValue!='DISLIKED')?'DISLIKED':'', id:filmCarte.id}
            
                else
                    return {...filmCarte};

            });
            
        case 'SET_LIKE_LIST':
            return new Array(action.length).fill().map((v, i) => ({
                id: i+1,
                likeValue: ''
            }));

        default:
            return state;

    }


}


export default likedFilms;