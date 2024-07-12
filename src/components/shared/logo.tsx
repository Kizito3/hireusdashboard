import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="w-fit max-w-24">
      <Link to="/" className="w-full">
        <img src="/images/hireus_logo.png" alt="HireUs Logistics Logo" />
      </Link>
    </div>
  );
};
