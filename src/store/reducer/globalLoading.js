import * as TYPES from "../action_type";

export default function loadingReducer(
  state = {
    globalLoading: false
  },
  action
) {
  switch (action.type) {
    case TYPES.GLOBAL_LOADING:
      state = { ...state };
      state.globalLoading = action.data;
      break;
    default:
      break;
  }
  return state;
}
