import MobileContainer from "../../components/MobileContainer/MobileContainer";
import "./Account.css";
import profilePic from "../../assets/profile.jpg";

function Account() {
  return (
    <MobileContainer>
      <div className="account-page">
        <div className="account-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
                src={profilePic}
                alt="Profile"
                className="profile-image"
                />

            <div className="camera-icon">📷</div>
          </div>

          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>marrydoe@gmail.com</p>
          </div>
        </div>

        <div className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </div>
      </div>
    </MobileContainer>
  );
}

export default Account;