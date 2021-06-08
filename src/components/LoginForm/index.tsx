import React from "react";
import { Redirect } from "react-router-dom";
import { Alert, Button, Input } from "../../ui";
import { loginButtonStyle, forgetPasswordStyle } from "./styles";
import _routes from "../../constants/routes";

const LoginForm = () => {
  const [email, setEmail] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSubmit = () => {
    if (email === "demo@myunisoft.fr" && password === "myunisoft") {
      setIsLoggedIn(true);
    } else setError("Email ou mot de passe incorrect");
  };

  if (isLoggedIn) return <Redirect to={_routes.users} />;

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">
        Connectez vous <br />à MyUnisoft
      </h2>
      {error && <Alert text={error} type="error" />}
      <Input type="email" label="Adresse email" onChange={(e) => setEmail(e)} />
      <Input
        type="password"
        label="Mot de passe"
        onChange={(e) => setPassword(e)}
      />
      <div style={forgetPasswordStyle} className="hover">
        Mot de passe oublié ?
      </div>
      <Button
        text="Se connecter"
        style={loginButtonStyle}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default LoginForm;
