import { Button, Row } from "antd";
import React from "react";
import PHForm from "../../../components/form/PHForm";
import PhIntput from "../../../components/form/PhIntput";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import { useCreateAcademicFacultyMutation } from "../../../redux/feature/admin/academicFaculty.api";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useCreateAcademicFacultyMutation();
  const onSubmit = async (data) => {
   const loading= toast.loading("loading");
    const res = await addAcademicFaculty(data);
    console.log(res, "iam res");

    toast.success("successful",{
        id:loading
    });
  };

  return (
    <Row justify={'center'} align={'middle'}> 
      <PHForm onSubmit={onSubmit}>
        <PhIntput name="name" type="text" label="Faculty Name" />

        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Row>
  );
};

export default CreateAcademicFaculty;
