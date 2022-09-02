import { 
    UP_ACTION,
    UPDATE_COUNTER,
    DOWN_ACTION,
    RESTART_COUNTER,
    MULTIPLY_COUNTER,
 } from "../actions/counter-type";
 
//  export const initialState = 0;

const counterReducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION.type:
        return state + 1;
    case UPDATE_COUNTER:
        return action.payload;
    case DOWN_ACTION.type:
    return state -1;
    case RESTART_COUNTER.type:
        return 0
    case MULTIPLY_COUNTER:
    return state * 2;
    default:
        return state;
}
}

