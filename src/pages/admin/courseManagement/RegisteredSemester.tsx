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

const RegisterdSemester = () => {
  //   const [params, setParams] = useState<TQueryParma[] | undefined>(undefined);

  const [semesterId, setSemesterId] = useState("");
  console.log(semesterId);

  const {
    data: semesterData,

    isFetching,
  } = useGetAllRegesterdSemesterQuery(undefined);

  const [updateSemesterRegisterStatus] =useUpdateRegisterSemesterStatusMutation();

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status, year }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );

  const handleStatusUpdate = (data) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    updateSemesterRegisterStatus(updateData)
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }

        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown trigger={["click"]} menu={menuProps}>
            <Button onClick={() => setSemesterId(item?.key)}>Update</Button>
          </Dropdown>
        );
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
      dataSource={tableData}
      //   onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default RegisterdSemester;
