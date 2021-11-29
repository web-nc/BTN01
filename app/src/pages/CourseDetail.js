import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CourseAssignment from "../components/CourseDetail/CourseAssignment/Assignment";
import CourseDetailNavBar from "../components/CourseDetail/CourseDetailNavBar/";
import CourseInfo from "../components/CourseDetail/CourseInfo/";
import CoursePeople from "../components/CourseDetail/CoursePeople/";
import CourseSetting from "../components/CourseDetail/CourseSetting";
import { getOneCourse } from "../services/course";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    getOneCourse(id).then((res) => {
      if (res.status === 200) {
        setCourse(res.data.payload);
      }
      if (res.status === 202) {
        toast.warning(res.data.message);
      }
    });
    return () => {
      setCourse({});
    };
  }, [id]);

  return (
    <div>
      <CourseDetailNavBar courseName={course.name} role={course.role} />

      <Routes>
        <Route path="/*" element={<Navigate to="/404" />} />
        <Route path="info" element={<CourseInfo role={course.role} course={course} />} />
        {/* <Route path="grades" /> */}
        <Route path="people" element={<CoursePeople course={course} />} />
        <Route path="assignment" element={<CourseAssignment />} />
        <Route
          path="setting"
          element={
            <CourseSetting
              role={course.role}
              name={course.name}
              details={course.details}
              briefName={course.briefName}
              id={id}
            />
          }
        />
      </Routes>
    </div>
  );
}
