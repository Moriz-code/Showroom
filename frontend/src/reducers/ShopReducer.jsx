const INITIAL_STATE = {

     currentItem: {},
};

export default function xxx(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_ITEM':

            return { ...state, currentItem: action.item }
    }
    return state;
}