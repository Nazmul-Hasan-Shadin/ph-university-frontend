import React from "react";
import { useGetAllFacultyCoursesQuery } from "../../redux/feature/faculty/facyltyCoureses.api";

const MyCourses = () => {
  const { data } = useGetAllFacultyCoursesQuery(undefined);
  console.log(data);

  return (
    <div>
      <h4>this is MyCOurses course</h4>
    </div>
  );
};

export default MyCourses;
