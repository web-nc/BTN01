import { COURSES_EMPTY, COURSES_FETCHED, COURSES_INCREMENT, LEAVE_COURSE } from "../types";

const initialState = { items: [] };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COURSES_EMPTY:
      return {
        ...state,
        items: [],
      };
    case COURSES_FETCHED:
      return {
        ...state,
        items: payload,
      };
    case COURSES_INCREMENT:
      return {
        ...state,
        items: state.items.concat(payload),
      };
    case LEAVE_COURSE:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload._id),
      };
    default:
      return state;
  }
}
