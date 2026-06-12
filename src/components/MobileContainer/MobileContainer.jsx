import "./MobileContainer.css";

function MobileContainer({ children }) {
  return (
    <div className="mobile-container">
      {children}
    </div>
  );
}

export default MobileContainer;