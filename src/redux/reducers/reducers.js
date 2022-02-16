import {INCREASE_COUNTER,RESET_COUNTER,DECREASE_COUNTER,INCREASE_MORE} from  "../types/types"

const initialState ={
    counter:0
}

export const reducer = (state=initialState,action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                counter:state.counter+action.payload
            }
        case RESET_COUNTER:
            return {
                counter: action.payload
            }
        case DECREASE_COUNTER:
            return {
                counter:state.counter-action.payload
            }
        case INCREASE_MORE:
            return {
                counter:state.counter+action.payload
            }
    
        default:
            return state;
    }
}
