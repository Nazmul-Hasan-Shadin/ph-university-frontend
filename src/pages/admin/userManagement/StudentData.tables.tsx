import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { Space, Table, TableColumnsType, TableProps } from "antd";
import { TAcademicSemister } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParma, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/feature/admin/userManagement.api";

export type TTableData = Pick<TStudent, "name" | "id">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParma[] | undefined>(undefined);
  console.log(params, "para");

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);
  console.log(studentData);

  const tableData = studentData?.data?.result.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
      showSorterTooltip: { target: "full-header" },

      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: "Roll No.",
      key: "id",
      dataIndex: "id",
    },

    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <Space>
            <button>Update</button>
            <button>Details</button>
            <button>Block</button>
          </Space>
        );
      },
      width:"1%"
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParma[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default StudentData;
