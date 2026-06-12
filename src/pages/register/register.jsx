import { useNavigate } from "react-router-dom";
import MobileContainer from "../../components/MobileContainer/MobileContainer";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="register-page">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>Full Name*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>Phone number*</label>
          <input type="text" placeholder="1111111111" />
        </div>

        <div className="input-group">
          <label>Email address*</label>
          <input type="email" placeholder="a@example.com" />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input type="password" placeholder="pass" />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input type="text" placeholder="xyz" />
        </div>

        <div className="agency-section">
          <p>Are you an Agency?*</p>

          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="agency" defaultChecked />
              <span>Yes</span>
            </label>

            <label className="radio-option">
              <input type="radio" name="agency" />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          className="register-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </MobileContainer>
  );
}

export default Register;