

const filter = (state = '', action) =>{

    switch (action.type) {
        case 'CHANGE_FILTER':
            return action.condition;
    
        default:
            return state;
    }

}

export default filter;


