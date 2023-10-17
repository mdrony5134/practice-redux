import { Increment, Decrement } from "./type";

export const incrementCount = (dispatch) =>{
    dispatch({type: Increment})
}
export const decrementCount = (dispatch)=>{
    dispatch({type: Decrement})
}