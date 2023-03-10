const initialState = {};

const projectReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SET_PROJECT':
            return actions.project;
        default:
            return state;
    }
}

export default projectReducer;
