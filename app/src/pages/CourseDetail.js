import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CourseAssignment from "../components/CourseDetail/CourseAssignment/Assignment";
import CourseDetailNavBar from "../components/CourseDetail/CourseDetailNavBar/";
import CourseInfo from "../components/CourseDetail/CourseInfo/";
import CoursePeople from "../components/CourseDetail/CoursePeople/";
import CourseSetting from "../components/CourseDetail/CourseSetting";
import { getOneCourse } from "../services/course";
import { getAssignments } from "../services/assignment";

export default function CourseDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, role, details, briefName } = useSelector(
    (state) => state.course.item
  );

  const [assignments, setAssignments] = useState([]);
  const handleAssignmentsChange = (newAssignments) => {
    setAssignments(newAssignments);
  }

  useEffect(() => {
    getAssignments(id).then(res => setAssignments(res.data.assignments));

    dispatch(async (dispatch) => {
      return getOneCourse(id).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "COURSE_FETCHED",
            payload: res.data.payload,
          });
        }
        if (res.status === 202) {
          toast.warning(res.data.message);
        }
      });
    });

    return () => {
      dispatch({ type: "COURSE_EMPTY" });
    };
  }, [dispatch, id]);

  return (
    <div>
      <CourseDetailNavBar courseName={name} role={role} />

      <Routes>
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="info" element={<CourseInfo role={role} assignments={assignments} />} />
        {/* <Route path="grades" /> */}
        <Route path="people" element={<CoursePeople />} />
        <Route path="assignment" element={<CourseAssignment assignments={assignments} handleAssignmentsChange={handleAssignmentsChange} />} />
        <Route
          path="setting"
          element={
            <CourseSetting
              role={role}
              name={name}
              details={details}
              briefName={briefName}
              id={id}
            />
          }
        />
      </Routes>
    </div>
  );
}
