const teammatesReducerDefaultState = [];

const teammatesReducer = (state = teammatesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_TEAMMATE':
            return [...state, action.teammate]
        case 'REMOVE_TEAMMATE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_TEAMMATE':
            return state.map((teammate) => {
                if(teammate.id === action.id){
                    return {
                        ...teammate,
                        ...action.updates
                    }
                } else {
                    return teammate;
                }
            });
        case 'SET_TEAMMATES':
            return action.teammates;
        default:
            return state;
    }
}

export default teammatesReducer;