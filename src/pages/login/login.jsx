import { useNavigate } from "react-router-dom";
import MobileContainer from "../../components/MobileContainer/MobileContainer";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="login-page">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </div>
    </MobileContainer>
  );
}

export default Login;