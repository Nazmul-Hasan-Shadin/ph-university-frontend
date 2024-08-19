
import PHForm from "../../../components/form/PHForm";
import PhIntput from "../../../components/form/PhIntput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/feature/admin/CourseManagement";

const CreateCourse = () => {
  const [createCourse] = useAddCourseMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCourseOptions = courses?.data?.map((item) => ({
    label: `${item.title}`,
    value: item?._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating ...");
    // const name = nameOptions[Number(data.name) - 1].label;
    const courseData = {
      ...data,
       code:Number(data?.code),
       credits:Number(data?.credits),
      preRequisiteCourse: data?.preRequisiteCourse?data.preRequisiteCourse.map(item=>({
         course:item,
         isDeleted:false
      })):[]    };
    console.log(courseData, "ima courseData");

    try {
      const res = (await createCourse(courseData)) as TResponse<any>;
      if (res.error) {
      console.log(res.error);
      
        toast.error(res?.error?.message, { id: toastId });
      } else {
        toast.success("Course created successful", { id: toastId });
      }
    } catch (error:any) {
        console.log(error);
        
      toast.error(error, { id: toastId });
    }
  };

  return (
    <Flex align="center" justify="center" style={{ height: "200vh" }}>
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PhIntput name="title" label="Title" type="text" />
          <PhIntput name="prefix" label="Prefix" type="text" />
          <PhIntput name="code" label="Code" type="text" />
          <PhIntput name="credits" label="Credits" type="text" />
          <PHSelect  mode={'multiple'} label="preRequisiteCourse" name="preRequisiteCourse" options={preRequisiteCourseOptions}/>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
