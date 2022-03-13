import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/auth.service";
import styled from "./login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const SITE_KEY = "6LdeqBAdAAAAAHmG_9hW6TisKjKGFXpOHK0tYrLB";

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://recaptcha.net/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then((token) => {
            setToken(token);
          });
      });
      await AuthService.login(userName, password, token).then(
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
    <div className={styled.login}>
      <form onSubmit={handleLogin} className={styled.loginForm}>
        <label>نام کار بری</label>
        <input
          type="text"
          value={userName}
          onChange={handleUserName}
          name="userName"
        />
        <label>رمز عبور</label>

        <input type="password" value={password} onChange={handlePassword} />
        <button type="submit">ورود</button>
      </form>
    </div>
  );
};

export default Login;

/*

const Login = () => {

const navigate=useNavigate()

  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    password: "",
    googleReCaptchaResponse: ""
  });

  const SITE_KEY = "6LdeqBAdAAAAAHmG_9hW6TisKjKGFXpOHK0tYrLB";

  

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };    

  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      await AuthService.login(query.name, query.password,query.googleReCaptchaResponse).then(
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
    <div className={styled.login}>

<GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
        <form className={styled.loginForm} onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="name">
              نام کاربری
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={query.password}
              onChange={handleChange()}
            />
          </div>
         
          <div className="form-group mt-3">
            {formStatus ? (
              <div className="alert alert-success">
                😀ورود موفقیت امیز بود
              </div>
            ) : (
              ""
            )}
            <GoogleReCaptcha
              onVerify={(token) => {
                setQuery({ ...query, googleReCaptchaResponse: token });
              }}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </GoogleReCaptchaProvider>


      
    </div>
  );
};

export default Login;

*/
