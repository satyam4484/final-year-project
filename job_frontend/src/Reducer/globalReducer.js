export const globalReducer = (state,action) => {
    switch(action.type){
        case 'TOGGLE_THEME':
            if(state.theme === 'light') {
                return {...state,theme:'dark'}
            }
            return {...state,theme:'light'}
        default:
            return state
    }
    return state
}