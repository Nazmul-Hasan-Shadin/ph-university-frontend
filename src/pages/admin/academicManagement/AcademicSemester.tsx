import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { Table, TableColumnsType, TableProps } from "antd";
import { TAcademicSemister } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParma } from "../../../types";

export type TTableData = Pick<
  TAcademicSemister,
  "_id" | "name" | "startMonth" | "endMonth" | "year"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParma[] | undefined>(undefined);
  console.log(params, "para");

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      _id,
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summar",
          value: "Summar",
        },
        {
          text: "Autum",
          value: "Autum",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2030",
          value: "2030",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },

    {
      title: "Action",
      key:'x',
      render:()=>{
        return (
         <div>
          <button>Update</button>
         </div>
        )
      }
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

export default AcademicSemester;
