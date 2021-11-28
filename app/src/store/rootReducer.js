import { combineReducers } from "redux";
import assignment from "./reducers/assignment";
import auth from "./reducers/auth";
import course from "./reducers/course";
import courses from "./reducers/courses";
import user from "./reducers/user";

export default combineReducers({ courses, course, auth, user, assignment });
