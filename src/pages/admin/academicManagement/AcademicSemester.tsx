import React from "react";
import { useGetAllSemesterQuery } from "../../../redux/feature/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const academicSemister = useGetAllSemesterQuery(undefined);
  console.log(academicSemister);

  return (
    <div>
      <h1>academic semester</h1>
    </div>
  );
};

export default AcademicSemester;
