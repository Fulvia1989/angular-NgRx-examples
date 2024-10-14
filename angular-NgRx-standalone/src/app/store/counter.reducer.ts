import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0; //could be anything

export const counterReducer = createReducer(
    initialState,
    on(increment, (currentState)=>{
        return currentState + 1; 
    })
);