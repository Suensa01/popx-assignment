import { useNavigate } from "react-router-dom";
import MobileContainer from "../../components/MobileContainer/MobileContainer";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="welcome-page">
        <div className="welcome-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <button
            className="welcome-create-btn"
            onClick={() => navigate("/register")}
            >
            Create Account
            </button>

            <button
            className="welcome-login-btn"
            onClick={() => navigate("/login")}
            >
            Already Registered? Login
            </button>
        </div>
      </div>
    </MobileContainer>
  );
}

export default Welcome;