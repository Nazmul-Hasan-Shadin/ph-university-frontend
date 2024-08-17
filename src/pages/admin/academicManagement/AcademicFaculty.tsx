import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllFacultyQuery } from "../../../redux/feature/admin/academicFaculty.api";
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

const AcademicFaculty = () => {
  
    const {data:academicFaculty,isLoading,isFetching}=useGetAllFacultyQuery(undefined)
  
   
    const tableData= academicFaculty?.data.map(({name})=>({
        name
    }))
  
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        
      ],
    },
    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
  );
};

export default AcademicFaculty;
