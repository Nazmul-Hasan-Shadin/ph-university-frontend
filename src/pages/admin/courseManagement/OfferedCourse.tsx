import { Button, Col, Flex } from 'antd';
import PHForm from '../../../components/form/PHForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHSelect from '../../../components/form/PHSelect';
import PHSelectWithWatch from '../../../components/form/PHSelectWithWatch';

import { useState } from 'react';
import { useCreateOfferedCourseMutation, useGetAllCoursesQuery, useGetAllRegesterdSemesterQuery, useGetCourseFacultyQuery } from '../../../redux/feature/admin/CourseManagement';
import { useGetAcademicDepartmentQuery, useGetAllAcademicFacultiesQuery } from '../../../redux/feature/admin/academicManagement.api';

import PhIntput from '../../../components/form/PhIntput';
import PHTimePicker from '../../../components/form/PHTimePicker';
import { weekdays, weekDaysOptions } from '../../../constants/global';
import moment from 'moment';


const OfferCourse = () => {
  const [courseId, setCourseId] = useState('');
 
  

  const [addOfferedCourse] = useCreateOfferedCourseMutation();

  const { data: semesterRegistrationData } = useGetAllRegesterdSemesterQuery([
    { name: 'sort', value: 'year' },
    { name: 'status', value: 'UPCOMING' },
  ]);

  // get all faculty data

  const { data: academicFacultyData } = useGetAllAcademicFacultiesQuery(undefined);
    //  all academic department 
  const { data: academicDepartmentData } =
    useGetAcademicDepartmentQuery(undefined);

    //  get all course

  const { data: coursesData } = useGetAllCoursesQuery(undefined);

  //   course faculty info

  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCourseFacultyQuery(courseId, { skip: !courseId });

  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const courseOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const facultiesOptions = facultiesData?.data?.faculties?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const offeredCourseData = {
      ...data,
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
      startTime: moment(new Date(data.startTime)).format('HH:mm'),
      endTime: moment(new Date(data.endTime)).format('HH:mm'),
    };

    const res = await addOfferedCourse(offeredCourseData);
    console.log(res);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />
          <PHSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <PHSelectWithWatch
            onValueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />
          <PHSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />
          <PhIntput type="text" name="section" label="Section" />
          <PhIntput type="text" name="maxCapacity" label="Max Capacity" />
          <PHSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;