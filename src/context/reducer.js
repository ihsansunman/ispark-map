function reducer(state, action) {

    switch (action.type) {
        case 'SET_COUNTY':
            return {...state, selectedCounty: state.counties.find(county => county.countyName === action.payload)};
        default:
            return state;
    }

}

export default reducer;