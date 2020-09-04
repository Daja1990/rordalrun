// Henter react
import React from "react";
// Henter form hook fra NPM React-hook-form
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useAuth from "../../Auth/Auth";
import NavbarSmall from '../../NavbarSmall/NavbarSmall';
import './Login.scss';

const Login = (props) => {
  // Deklarerer hook til login form
  const { handleSubmit, register, errors } = useForm();
  const { login, logout, user, loggedIn } = useAuth();

  const onSubmit = handleSubmit((values) => {
    login(values.username.trim(), values.password.trim());
  });

  if(!loggedIn) {
    return (
      <form onSubmit={onSubmit}>
        <div>
        <NavbarSmall />
        <div className="loginwrap">
          <label htmlFor="username">Brugernavn:</label>
          <input
            type="text"
            name="username"
            id="username" 
            ref={register({
              required: "Nødvendig",
              minLength: { message: "too short", value: 2 },
              maxLength: { message: "too long", value: 30 },              
            })}
          />
          <ErrorMessage errors={errors} name={"username"}>
            {({ message }) => <span>{message}</span>}
          </ErrorMessage>
        </div>
        </div>
        <div className="loginwrap">
        <div>
          <label htmlFor="password">Adgangskode:</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={register({
              required: "Nødvendig",
              minLength: { message: "too short", value: 2 },
              maxLength: { message: "too long", value: 30 },              
            })}
          />
          <ErrorMessage errors={errors} name={"password"}>
            {({ message }) => <span>{message}</span>}
          </ErrorMessage>
        </div>
        </div>
        <div className="loginwrap">
        <button className="logout-button" type="submit">Send</button>
        </div>
      </form>
    )
  }
  return (
      <div>
      <NavbarSmall />
      <div className="loginwrap">
        <p className="login-p">Du er nu logget ind</p>
      <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Login;
