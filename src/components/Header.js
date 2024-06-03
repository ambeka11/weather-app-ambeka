import {NavLink} from "react-router-dom";

function Header(){
  return (
    <div className="header">
      <div className="branding">
        <h1>Weather App</h1>
      </div>
      <div className="page_link">
        <ul>
         <li>
          {" "}
          <NavLink 
          to="/current-weather"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Current Weather
         </NavLink>
         </li>


         
          <li>
            {" "}
            <NavLink to="/forecast" 
            className={({ isActive, isPending}) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
            >
              Forecast
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;