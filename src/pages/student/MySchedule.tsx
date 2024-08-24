
import { useGetMyEnrolledCoursesQuery } from "../../redux/feature/student/sudentCourseManagement.api";

const MySchedule = () => {
  const { data: enrolledCourse } = useGetMyEnrolledCoursesQuery();
  console.log(enrolledCourse);

  return (
    <div>
      {enrolledCourse?.data.map((item) => {
        return (
          <div key={item._id}>
            <div>{item.course.title}</div>
            <div>{item.offeredCourse.section}</div>
            <div>
              {item.offeredCourse.days.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MySchedule;
