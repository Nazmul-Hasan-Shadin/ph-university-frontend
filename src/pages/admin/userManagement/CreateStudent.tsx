import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PhIntput from "../../../components/form/PhIntput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOption } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAcademicDepartmentQuery,
  useGetAllSemesterQuery,
} from "../../../redux/feature/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/feature/admin/userManagement.api";

const studentDummyData = {
  password: "ilove you",
  student: {
    name: {
      firstName: "fuck",
      middleName: "A.",
      lastName: "Doe",
    },

   
    dateOfBirth: "1990-01-01",
   
    contactNumber: "123-456-7890",
    emergencyContactNo: "098-765-4321",
    bloodGroup: "A+",
    presentAddress: "123 Main St, Anytown, USA",
    permanentAddress: "456 Elm St, Othertown, USA",

    guardian: {
      fatherName: "Michael bal",
      fatherOccupation: "Engineer",
      fatherContactNo: "123-456-7891",
      motherName: "Jane Doe",
      motherContactNo: "123-456-7892",
      motherOccupation: "Teacher",
    },
    localGuardian: {
      name: "Richard Roe",
      occupation: "Doctor",
      contactNo: "123-456-7893",
      address: "789 Oak St, Sometown, USA",
    },
    admissionSemister: "66c059e968277714978780c5",
    academicDeparment: "66c055fa09184dd09136fc19",
    isDeleted: false,
  },
};
//  this is only for develop;ment purpose
const studentDefaultValues = {
  name: {
    firstName: "fuck",
    middleName: "A.",
    lastName: "Doe",
  },

  gender: "male",

  email: "shadin92@gmail.com",
  contactNumber: "123-456-7890",
  emergencyContactNo: "098-765-4321",
  bloodGroup: "A+",
  presentAddress: "123 Main St, Anytown, USA",
  permanentAddress: "456 Elm St, Othertown, USA",

  guardian: {
    fatherName: "Michael bal",
    fatherOccupation: "Engineer",
    fatherContactNo: "123-456-7891",
    motherName: "Jane Doe",
    motherContactNo: "123-456-7892",
    motherOccupation: "Teacher",
  },
  localGuardian: {
    name: "Richard Roe",
    occupation: "Doctor",
    contactNo: "123-456-7893",
    address: "789 Oak St, Sometown, USA",
  },
  admissionSemister: "66c059e968277714978780c5",
  academicDeparment: "66c055fa09184dd09136fc19",
  isDeleted: false,
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log({ data, error });

  const { data: sData, isLoading: sLoading } =
    useGetAllSemesterQuery(undefined);

  const { data: dData, isLoading: dIsLoading } = useGetAcademicDepartmentQuery(
    undefined,
    { skip: sLoading }
  );
  console.log(dData);

  const semesterOptionos = sData?.data.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student1234",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append('file',data?.image)
    console.log(Object.fromEntries(formData));
    console.log(data,'iam data bro');
    
  
    
    
    addStudent(formData);
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="name.firstName"
                label="First Name"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="name.middleName"
                label="Middle Name"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="name.lastName"
                label="Last Name"
              ></PhIntput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect label="Gender" name="gender" options={genderOption} />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date Of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloodGroup"
                label="Blood Group"
                options={bloodGroupOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput type=" text" name="email" label="Email"></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="contactNumber"
                label="Contact Number"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="emergencyContactNo"
                label="emergencyContactNo"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="presentAddress"
                label="presentAddress"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="permanentAddress"
                label="Permanent Addr"
              ></PhIntput>
            </Col>









            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller name="image" render={({field:{onChange,value,  ...field}})=>(
                <Form.Item label='Picture'>
                <Input  {...field} type="file" onChange={(e)=>onChange(e.target.files?.[0])} />
                </Form.Item>
              )}/>
            </Col>

            <Divider>Guardian Info</Divider>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="guardian.fatherName"
                label="Father Name"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="guardian.fatherOccupation"
                label="fatherOccupation"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="guardian.fatherContactNo"
                label="fatherContactNo"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="guardian.motherName"
                label="Mother Name"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="guardian.motherContactNo"
                label="Moterh Contact"
              ></PhIntput>
            </Col>

            <Divider>Local Guardian</Divider>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="localGuardian.name"
                label="Local Guradian Name"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="localGuardian.occupation"
                label=" Local Guardian occupation"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="localGuardian.contactNo"
                label="LocaGuardianContact"
              ></PhIntput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="localGuardian.address"
                label="Local Guar Addr"
              ></PhIntput>
            </Col>

            <Divider>Academic Info</Divider>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                disabled={sLoading}
                name="admissionSemister"
                label="admissionSemisterr"
                options={semesterOptionos}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhIntput
                type=" text"
                name="academicDeparment"
                label="academicDeparment"
              ></PhIntput>
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
