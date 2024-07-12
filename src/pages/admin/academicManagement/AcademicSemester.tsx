import React from 'react';
import { useGetAllSemesterQuery } from '../../../redux/feature/academicSemester/academicSemesterApi';

const AcademicSemester = () => {
    const academicSemister= useGetAllSemesterQuery()
    console.log(academicSemister);
    
    return (
        <div>
            
        </div>
    );
};

export default AcademicSemester;