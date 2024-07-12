import { Input } from 'antd';

import { Controller } from 'react-hook-form';

 
type TInputProps ={
    type:string,
    name:string
}

const PhIntput = ({type,name}:TInputProps) => {
    // const {register}=useFormContext()
    return (

         <Controller
          name={name}
          render={({field})=>  <Input  {...field} type={type} id={name} /> }
         />
       
        
    );
};

export default PhIntput;