export const globalReducer = (state,action) => {
    switch(action.type){
        case 'USER_LOGOUT':
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {...state,isloggedin:false,user:{}}
        case 'LOGIN_USER':
            return {...state,isloggedin:true,user:action.data}
        case 'TOGGLE_SPIN':
            return {...state,isLoading:!state.isLoading}
        case 'TOGGLE_THEME':
            if(state.theme === 'light') {
                return {...state,theme:'dark'}
            }
            return {...state,theme:'light'}
        case 'SET_MESSAGE':
            return {...state,error:{...state.error,isError:action.data.isError,variant:action.data.variant,title:action.data.title,message:action.data.message}}
        case 'THEME_COLOR':
            return {...state,themeColor:action.color}
        default:
            return state
            
    }
}