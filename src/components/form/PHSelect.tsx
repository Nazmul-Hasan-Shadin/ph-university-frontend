import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options:{value:string,label:string,disabled?:boolean}[] | undefined;
  disabled:boolean
};

const PHSelect = ({ label, name,options,disabled }:TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange },fieldState:{error} }) => (
        <Form.Item label={label}>
          <Select

          
            style={{ width: "100%" }}
            onChange={onChange}
            options={options}
          />
          {error&& <small style={{color:'red'}}>{error.message}</small> }
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
