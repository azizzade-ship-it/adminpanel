import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/auth.service";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [nameFamily, setNameFamily] = useState("");
  const [cityId, setCityId] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [notificationToken, setNotificationToken] = useState("");
  const [clientType, setClientType] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(
        mobile,
        nameFamily,
        cityId,
        provinceId,
        notificationToken,
        clientType,
        referralCode
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
      <div>
        <form onSubmit={handleSignup}>
          <h3>Sign up</h3>
          <input
            type="text"
            placeholder="email"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            placeholder="nameFamily"
            value={nameFamily}
            onChange={(e) => setNameFamily(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Login;
