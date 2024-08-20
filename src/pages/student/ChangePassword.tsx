import { Button, Row } from "antd";
import React from "react";
import PHForm from "../../components/form/PHForm";
import PhIntput from "../../components/form/PhIntput";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../../redux/feature/admin/userManagement.api";
import { TResponse } from "../../types";
import { useAppDispatch } from "../../redux/hook";
import { logOut } from "../../redux/feature/auth/auth.slice";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res.data.success);
    

    if (res?.data?.success) {
      dispatch(logOut());
    //   navigate("/login");
    } else {
      toast.error(res.data.error.message);
    }
  };

  return (
    <>
      <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
        <PHForm onSubmit={onSubmit}>
          <div>
            {/* <input {...register("id")} type="text" id="id" /> */}
            <PhIntput label="ID" type={"text"} name={"oldPassword"} />
          </div>
          d
          <div>
            <PhIntput type={"text"} name={"newPassword"} label="newPassword" />
          </div>
          <Button htmlType="submit">Change password</Button>
        </PHForm>
      </Row>
    </>
  );
};

export default ChangePassword;
