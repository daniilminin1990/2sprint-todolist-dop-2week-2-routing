import { Navigate } from "react-router-dom";
import { ReactComponentElement } from "react";
type PropsType = {
  children: ReactComponentElement<any>;
};
export const ProtectedRoute: React.FC<PropsType> = ({ children }) => {
  const logged = false
  return logged
    ? children : <Navigate to="/page/error" />;
};