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

  const defaultValues= {
    id:'A-002',
    password:'SecurePassword123'
  }

  const onSubmit = async (data: FieldValues) => {
  

    const toastId = toast.loading("Logging");
    const userInfo = {
      id: data.id,
      password: data.password,
    }

    try {
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <Row justify={"center"} align={'middle'} style={{height:'100vh'}}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <div>
        <label htmlFor="id">Id:</label>
        {/* <input {...register("id")} type="text" id="id" /> */}
        <PhIntput type={'text'} name={'id'} />
      </div>

      <div>
        <label htmlFor="password">Id:</label>
        <PhIntput type={'text'} name={'password'}  />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
    </Row>
  );
};

export default Login;
