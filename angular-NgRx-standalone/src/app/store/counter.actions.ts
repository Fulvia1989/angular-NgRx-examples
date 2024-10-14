import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment', //identifier should be unique and understandable
    props<{value:number}>() //data passed to the action
);