import {INCREASE_COUNTER,RESET_COUNTER,DECREASE_COUNTER,INCREASE_MORE} from "../types/types"
export const increase = (payload) => {
    return (
        {
        type: INCREASE_COUNTER,
        payload
        }
        )
};

export const reset = (payload) => {
    return (
        {
        type: RESET_COUNTER,
        payload
        }
        )
};

export const decrease = (payload) => {
    return (
        {
        type: DECREASE_COUNTER,
        payload
        }
        )
};


export const increaseMore = (payload) => {
    return(
        {
        type:INCREASE_MORE,
        payload
        }
    )
}