import {
  Button,
  Dropdown,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { TSemester } from "../../../types";
import {
    useGetAllCoursesQuery,
  useGetAllRegesterdSemesterQuery,
  useUpdateRegisterSemesterStatusMutation,
} from "../../../redux/feature/admin/CourseManagement";
import moment from "moment";
import { useState } from "react";

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

  const { data: courses,isFetching } = useGetAllCoursesQuery(undefined);

  const courseDataOptions = courses?.data?.map(({ _id, title, code }) => ({
    title,
    code,
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
        return <Button>Assign Faculties</Button>;
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

export default Courses;
