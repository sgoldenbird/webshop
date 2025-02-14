import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col gap-2">
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
