import { Button, Row } from "antd";

import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { TUser, setUser } from "../redux/feature/auth/auth.slice";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PhIntput from "../components/form/PhIntput";

const Login = () => {
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();

  const defaultValues = {
    id: "2027020001",
    password: "student1234",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging");
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    try {
      const res = await login(userInfo).unwrap();
      console.log(res.data.needsPasswordChange);

      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId });

      if (res?.data?.needsPasswordChange) {
        navigate(`/change-password`);
      }
      else{
        navigate(`/${user.role}/dashboard`);
      }

    
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div>
          {/* <input {...register("id")} type="text" id="id" /> */}
          <PhIntput label="ID" type={"text"} name={"id"} />
        </div>

        <div>
          <PhIntput type={"text"} name={"password"} label="Password" />
        </div>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
