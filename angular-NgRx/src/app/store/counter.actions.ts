import { createAction } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment' //identifier should be unique and understandable
);