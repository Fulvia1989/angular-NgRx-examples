import { Action, createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment', //identifier should be unique and understandable
    props<{value:number}>() //data passed to the action
);

export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action {
//     readonly type =  INCREMENT;

//     constructor(public value: number){}
// }

// export type CounterActions = IncrementAction ;