import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0; //could be anything

// New version

export const counterReducer = createReducer(
    initialState,
    on(increment, (currentState)=>{
        return currentState + 1; 
    })
);

// Older version (but always supported)

// export function counterReducer(state = initialState){
//     return state;
// }