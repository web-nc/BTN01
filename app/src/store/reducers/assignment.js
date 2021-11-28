import {
  ASSIGNMENT_EMPTY,
  ASSIGNMENT_FETCHED,
  ASSIGNMENT_REMOVE,
  ASSIGNMENT_UPDATE,
} from "../types";

const initialState = {
  items: [
    { id: "1", title: "First task", grade: 2 },
    { id: "2", title: "Second task", grade: 4 },
    { id: "3", title: "Third task", grade: 5 },
  ],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ASSIGNMENT_EMPTY:
      return {
        ...state,
      };
    case ASSIGNMENT_FETCHED:
      return {
        ...state,
        // info: payload,
        items: payload,
      };
    case ASSIGNMENT_UPDATE:
      return {
        ...state,
        // info: payload,
        items: payload,
      };
    case ASSIGNMENT_REMOVE:
      return {
        ...state,
        // info: payload,
        items: payload,
      };
    default:
      return state;
  }
}
