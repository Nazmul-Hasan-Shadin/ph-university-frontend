import { Form, Select, Space } from "antd";
import { Controller } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options:{value:string,label:string,disabled?:boolean}[] | undefined;
  disabled?:boolean;
  mode?:"multiple" | undefined
};

const PHSelect = ({ label, name,options,disabled,mode }:TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange },fieldState:{error} }) => (
        <Form.Item label={label}>
          <Select
        
           mode={mode}     
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
