import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SetPopupContext } from "../App";



const Logout = (props) => {
  const navigate = useNavigate();
  const setPopup = useContext(SetPopupContext);
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    setPopup({
      open: true,
      severity: "success",
      message: "Logged out successfully",
    });
  }, []);
  return navigate("/login");
};

export default Logout;
