import {
  useEnrolCourseMutation,
  useGetAllOfferedCoursesQuery,
} from "../../redux/feature/student/sudentCourseManagement.api";
import { Button, Col, Row } from "antd";

type TCourse = {
  [index: string]: any;
};

const OfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);
  const [enroll] = useEnrolCourseMutation();

  const singleObject = offeredCourseData?.data?.reduce((acc: TCourse, item) => {
    const key = item.course.title;
    acc[key] = acc[key] || { courseTitle: key, section: [] };
    acc[key].section.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });

    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});
  const handleEnroll = async(id) => {
    const  enrollData={
        offeredCourse:id
    }
   const res=await enroll(enrollData);
   console.log(res);
   
  };

  if (!modifiedData) {
    return <p>No availabel courses</p>
  }

  return (
    <Row gutter={[0, 20]}>
      {modifiedData.map((item) => {
        return (
          <Col span={"24"} style={{ border: "solid #d4d4d4 2px" }}>
            <div style={{ padding: "10px" }}>
              <h2> {item.courseTitle}</h2>
            </div>
            <div>
              {item.section.map((section) => {
                return (
                  <Row
                    justify={"space-between"}
                    align={"middle"}
                    style={{ borderTop: "solid #d4d4d4 2px", padding: "10px" }}
                  >
                    <Col span={5}>section:{section.section}</Col>
                    <Col span={5}>
                      {section.days.map((day) => (
                        <span>{day}</span>
                      ))}
                    </Col>

                    <Col span={5}>start time {section.startTime}</Col>
                    <Col span={5}>End time {section.endTime}</Col>
                    <Button onClick={() => handleEnroll(section._id)}>
                      Enroll
                    </Button>
                  </Row>
                );
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default OfferedCourse;
