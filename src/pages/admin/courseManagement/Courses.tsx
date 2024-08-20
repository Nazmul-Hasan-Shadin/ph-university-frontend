import {
  Button,
  Dropdown,
  Modal,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { TSemester } from "../../../types";
import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
  useGetAllRegesterdSemesterQuery,
  useUpdateRegisterSemesterStatusMutation,
} from "../../../redux/feature/admin/CourseManagement";
import moment from "moment";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultiesQuery } from "../../../redux/feature/admin/userManagement.api";

export type TTableData = Pick<TSemester, "startDate" | "endDate" | "status">;

const items = [
  {
    label: "ONGOING",
    key: "ONGOING",
  },
  {
    label: "UPCOMING",
    key: "UPCOMING",
  },
  {
    label: "ENDED",
    key: "ENDED",
  },
];

const Courses = () => {
  //   const [params, setParams] = useState<TQueryParma[] | undefined>(undefined);

  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

  const courseDataOptions = courses?.data?.map(({ _id, title, code }) => ({
    title,
    code,
    key: _id,
  }));

  const [updateSemesterRegisterStatus] =
    useUpdateRegisterSemesterStatusMutation();

  const handleStatusUpdate = (data) => {
    console.log(data);
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      dataIndex: "title",
      showSorterTooltip: { target: "full-header" },

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },

    {
      title: "Code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);

        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];

  //   const onChange: TableProps<TTableData>["onChange"] = (
  //     _pagination,
  //     filters,
  //     _sorter,
  //     extra
  //   ) => {
  //     // if (extra.action === "filter") {
  //     //   const queryParams: TQueryParma[] = [];

  //     //   filters.name?.forEach((item) =>
  //     //     queryParams.push({ name: "name", value: item })
  //     //   );
  //     //   filters.year?.forEach((item) =>
  //     //     queryParams.push({ name: "year", value: item })
  //     //   );

  //     //   setParams(queryParams);
  //     // }
  //   };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={courseDataOptions}
      //   onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};


// 2nd component for maodal

export const AddFacultyModal = ({ facultyInfo }) => {
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  const [addCourseFaculties] = useAddFacultiesMutation();

  const facultiesOption = facultiesData?.data.map((item) => ({
    value: item._id,
    label: item?.fullName,
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);

    const facultyData = {
      courseId: facultyInfo.key,
      data,
    };
    addCourseFaculties(facultyData);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            mode="multiple"
            options={facultiesOption}
            name="faculties"
            label="Faculty"
          />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
