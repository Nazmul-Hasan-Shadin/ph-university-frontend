import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  logOut,
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/feature/auth/auth.slice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role?: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  let user;

  const token = useAppSelector(useCurrentToken);

  if (token) {
    user = verifyToken(token);
  }

  console.log(user);
  
  const dispatch = useAppDispatch();
  if (role !== undefined && role !== user?.role) {
    dispatch(logOut());
    return <Navigate to={"/login"} />;
  }

  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
