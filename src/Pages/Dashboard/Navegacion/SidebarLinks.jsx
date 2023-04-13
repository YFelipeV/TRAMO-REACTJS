import { Link } from "react-router-dom";


function SidebarLinks({ children, goingTo }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link collapsed" to={goingTo}>
           <i className="bx bi-card-heading"></i> 
          <span className="m-2">{children}</span>
        </Link>
      </li>
    </>
  );
}

export default SidebarLinks;
