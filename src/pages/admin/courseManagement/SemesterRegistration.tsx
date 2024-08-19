import React from "react";
import PHForm from "../../../components/form/PHForm";
import PhIntput from "../../../components/form/PhIntput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, DatePicker, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import {
  nameOptions,
  semesterStatusOptions,
} from "../../../constants/semester";
import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useAddRegisterSemesterMutation } from "../../../redux/feature/admin/CourseManagement";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisterSemesterMutation();
  const { data: academicSemester } = useGetAllSemesterQuery();

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    label: `${item.name} ${item.year}`,
    value:item?._id,  
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating ...");
    // const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      ...data,
      maxCredit:Number(data.maxCredit),
      minCredit:Number(data.minCredit)
    };
     console.log(semesterData,'ima semesterData');
     

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester Registered successful", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex align="center" justify="center" style={{ height: "200vh" }}>
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            options={academicSemesterOptions}
            name={"academicSemester"}
            label={"Academi Semester"}
          />
          <PHSelect
            options={semesterStatusOptions}
            name={"status"}
            label={"Status"}
          />

          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <PhIntput name="maxCredit" label="Max Credit" type="number" />
          <PhIntput name="minCredit" label="Min Credit" type="number" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
