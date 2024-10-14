import { createReducer } from "@ngrx/store";

const initialState = 0; //could be anything

export const counterReducer = createReducer(
    initialState
);