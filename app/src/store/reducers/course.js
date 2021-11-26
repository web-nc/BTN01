import { COURSE_EMPTY, COURSE_FETCHED, COURSE_UPDATE } from "../types";

const initialState = { item: {} };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COURSE_EMPTY:
      return {
        ...state,
        item: {},
      };
    case COURSE_FETCHED:
      return {
        ...state,
        item: payload,
      };
    case COURSE_UPDATE:
      return {
        ...state,
        item: {
          ...state.item,
          name: payload.name,
          details: payload.details,
          briefName: payload.briefName,
        },
      };
    default:
      return state;
  }
}
