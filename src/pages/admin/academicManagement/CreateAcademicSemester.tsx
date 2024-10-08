import React from "react";
import PHForm from "../../../components/form/PHForm";
import PhIntput from "../../../components/form/PhIntput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { nameOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/feature/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating ...");
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data?.name,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
      year: data.year,
    };

    try {
      console.log(semesterData);
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex align="center" justify="center" style={{ height: "200vh" }}>
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect options={nameOptions} name={"name"} label={"Name"} />
          <PHSelect options={yearOptions} name={"year"} label={"Year"} />
          <PHSelect
            options={monthOptions}
            name={"startMonth"}
            label={"Start Month"}
          />
          <PHSelect
            options={monthOptions}
            name={"endMonth"}
            label={"End Month"}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
