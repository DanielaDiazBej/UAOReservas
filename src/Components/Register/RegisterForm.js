import React, { useRef, useEffect } from "react";
import logo from "../../Resources/Login/logo_Horizontal.png";
import "../../Pages/Login/Login.css";
import ButtonLogin from "../Button/ButtonLogin";
import "../../Pages/Content.css";
import { Link, useHistory } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "../../App";
import axios from "axios";

const LoginForm = () => {
  const identifier = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const last_name = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      history.push("/Pages/Home");
    }
  }, []);

  const handleLogin = () => {
    axios
      .post(
        "http://ec2-3-21-45-36.us-east-2.compute.amazonaws.com/auth/local/register",
        {
          email: identifier?.current?.value,
          username: identifier?.current?.value?.split("@")[0], // "frank.smith@uao.edu.co",
          password: password?.current?.value, //"123456",
          provider: "local",
          name: name.current?.value,
          last_name: last_name.current?.value,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res?.data?.jwt) {
          // localStorage.setItem("jwt", res?.data?.jwt);
          // localStorage.setItem("email", res?.data?.user?.email);
          // localStorage.setItem("name", res?.data?.user?.name);
          // localStorage.setItem("last_name", res?.data?.user?.last_name);
          // localStorage.setItem("id", res?.data?.user?.id);

          history.push("/");
        }
      });
  };

  return (
    <div className="o-container-login-form">
      <div className="o-login-form">
        <div className="o-container-logo">
          <img src={logo} />
        </div>
        <div className="o-line"></div>
        <h2 className="o-login">Ingresar</h2>
        <input className="o-user" ref={name} type="text" placeholder="Nombre" />
        <input
          className="o-user"
          ref={last_name}
          type="text"
          placeholder="Apellido"
        />
        <input
          className="o-user"
          ref={identifier}
          type="email"
          placeholder="Correo"
        />
        <input
          className="o-psd"
          ref={password}
          type="password"
          placeholder="Contraseña"
        />
        <ButtonLogin onClick={handleLogin} action="Registrarse" />
        <p>¿Has olvidado tu usuario o contraseña?</p>
      </div>
    </div>
  );
};

export default LoginForm;
