import React, { useEffect } from "react";
import CourseHomeNavBar from "../components/CourseHome/CourseHomeNavBar/";
import CourseList from "../components/CourseHome/CourseList/";
import { getCourses } from "../services/course";
import { useDispatch, useSelector } from "react-redux";

export default function ClassHome() {
  const items = useSelector((state) => state.courses.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(async (dispatch) => {
      return getCourses().then((res) => {
        dispatch({ type: "COURSES_FETCHED", payload: res.data.payload });
      });
    });

    return () => {
      dispatch({ type: "COURSES_EMPTY" });
    };
  }, [dispatch]);

  return (
    <div>
      <CourseHomeNavBar />
      <CourseList courses={items} />
    </div>
  );
}
