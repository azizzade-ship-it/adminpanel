import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/auth.service";
const Login = () => {
  const [mobile, setMobile] = useState("");
  const[verifyCode,setVerifyCode] = useState("")
  const[notificationToken,setNotificatioToketn]=useState("")
  const[clientType,setClientTypen]=useState("")

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(
        mobile,
        verifyCode,
        notificationToken,
        clientType
      ).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="text"
          placeholder="شماره همراه رو وارد کنید "
          onChange={handleMobile}
        />
        <button type="submit" >
          دریافت کد
        </button>
      </form>
    </>
  );
};

export default Login;
