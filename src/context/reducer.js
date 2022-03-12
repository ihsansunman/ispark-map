function reducer(state, action) {

    switch (action.type) {
        case 'SET_COUNTY':
            return {...state, selectedCounty: action.payload};
        default:
            return state;
    }

}

export default reducer;