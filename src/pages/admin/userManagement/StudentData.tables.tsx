import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { TAcademicSemister } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParma, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/feature/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TStudent,
  "name" | "id" | "email" | "contactNumber"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParma[]>([]);

  const [page, setPage] = useState(1);

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "limit", value: 2 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const metaData = studentData?.data?.meta;

  console.log(metaData);

  const tableData = studentData?.data?.result.map(
    ({ _id, fullName, id, email, contactNumber }) => ({
      key: _id,
      fullName,
      id,
      contactNumber,
      email,
    })
  );

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
      title: "Email.",
      key: "email",
      dataIndex: "email",
    },

    {
      title: "Contact No.",
      key: "contactNumber",
      dataIndex: "contactNumber",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);

        return (
          <Space>
            <Link to={`/admin/student-data/${item?.key}`}>
              <Button>Update</Button>
            </Link>
            <button>Details</button>
            <button>Block</button>
          </Space>
        );
      },
      width: "1%",
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
    <>
      <Table
        loading={isFetching}
        columns={columns}
        pagination={false}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={metaData.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
