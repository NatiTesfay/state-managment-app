import { UP_ACTION,DOWN_ACTION,ZERO_ACTION } from './components/store/actions/counterAction/';

const reducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION.type:

        return state + 1;
    case DOWN_ACTION.type:

        return state - 1;
    case ZERO_ACTION.type:

        return 0;

    default:
        return state;
}
}
export default reducer;
